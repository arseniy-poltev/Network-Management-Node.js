const net = require("net");
const logger = require("../logger");
const isNumber = require("../helpers.js").isNumber;

class ClickCommand {
  constructor(action, element, handler, callback) {
    this.action = action;
    this.element = element;
    this.handler = handler;
    this.callback = callback;

    this.statusLine = "";
    this.dataLine = "";
    this.dataLen = 0;
    this.data = "";
    this.success = false;
    this.error = null;
  }

  parseData(data) {
    this.data = data;
  }

  get command() {
    if (!this.element) {
      return `${this.action} ${this.handler}`;
    } else {
      return `${this.action} ${this.element}.${this.handler}`;
    }
  }

  get value() {
    return this.data;
  }
}

class IntClickReadCommand extends ClickCommand {
  constructor(element, handler) {
    super("READ", element, handler, null);
    this._value = null;
  }

  parseData(data) {
    super.parseData(data);
    this._value = Number(this.data);
  }

  get value() {
    return this._value;
  }
}

class BoolClickReadCommand extends ClickCommand {
  constructor(element, handler) {
    super("READ", element, handler, null);
    this._value = null;
  }

  parseData(data) {
    super.parseData(data);
    this._value = this.data === "true" ? true : false;
  }

  get value() {
    return this._value;
  }
}

class ClickController {
  constructor(host, port) {
    this.host = host;
    this.port = port;

    this.socket = new net.Socket();
    this.socket.setEncoding("utf8");

    // Private members
    this._buffer = "";
    this._commands = [];
    this._activeCommand = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      const errorHandler = (err) => {
        reject(err);
      };
      this.socket.once("error", errorHandler);
      this.socket.connect({
        host: this.host,
        port: this.port
      }, (err) => {
        this.socket.removeListener("error", errorHandler);
        if (err) {
          return reject(err);
        }
        // Wait for welcome message
        this.socket.once("data", (data) => {
          if (data.startsWith("Click::ControlSocket")) {
            // Successful connection, setup the main data receive function
            this.socket.on("data", (data) => { this._parseData(data); });
            return resolve();
          } else {
            return reject(`Invalid Click ControlSocket welcome message: ${data}`);
          }
        });
      });
    });
  }

  disconnect() {
    this.socket.end();
  }

  callReadCommand(command) {
    return new Promise((resolve, reject) => {
      command.callback = (err, command) => {
        // This callback will be called once we have a response from Click on this command
        if (err) {
          return reject(command);
        }
        return resolve(command);
      };
      this._commands.push(command);
      this._processCommands();
    });
  }

  callReadHandler(element, handler) {
    return new Promise((resolve, reject) => {
      let command = new ClickCommand("READ", element, handler, (err, command) => {
        // This callback will be called once we have a response from Click on this command
        if (err) {
          return reject(command);
        }
        return resolve(command);
      });
      this._commands.push(command);
      this._processCommands();
    });
  }

  _processCommands() {
    if (this._commands.length === 0 || this._activeCommand !== null) {
      return;
    }

    this._activeCommand = this._commands.shift();
    this.socket.write(`${this._activeCommand.command}\r\n`);
  }

  _parseData(data) {
    if (!this._activeCommand) {
      logger.warn(`ClickController received data without active command: ${data}`);
      this._buffer = "";
      return;
    }
    this._buffer += data;
    let i;
    // Parse the command status response line
    if (!this._activeCommand.statusLine) {
      i = this._buffer.indexOf("\r\n");
      if (i === -1) {
        return;
      }
      this._activeCommand.statusLine = this._buffer.slice(0, i);

      if (/^2\d\d/.test(this._activeCommand.statusLine)) {
        this._activeCommand.success = true;
      } else {
        this._activeCommand.success = false;
        this._activeCommand.error = this._activeCommand.statusLine;
        this._buffer = "";
        this._completeActiveCommand();
        return;
      }

      this._buffer = this._buffer.slice(i + 2);
    }
    // Parse the 'DATA n' line
    if (!this._activeCommand.dataLine) {
      i = this._buffer.indexOf("\r\n");
      if (i === -1) {
        return;
      }

      this._activeCommand.dataLine = this._buffer.slice(0, i);
      let dataLenString = this._activeCommand.dataLine.slice(5);

      if (!this._activeCommand.dataLine.startsWith("DATA ") || !isNumber(dataLenString)) {
        this._activeCommand.success = false;
        this._activeCommand.error = `The command '${this._activeCommand.command}' failed, invalid DATA line: ${this._activeCommand.dataLine}`;
        this._buffer = "";
        this._completeActiveCommand();
        return;
      }

      this._activeCommand.dataLen = Number(dataLenString);
      this._buffer = this._buffer.slice(i + 2);
    }

    if (this._buffer.length < this._activeCommand.dataLen) {
      return;
    }
    this._activeCommand.parseData(this._buffer.slice(0, this._activeCommand.dataLen));
    this._buffer = this._buffer.slice(this._activeCommand.dataLen);
    this._completeActiveCommand();
  }

  _completeActiveCommand() {
    let command = this._activeCommand;
    this._activeCommand = null;
    // Schedule any waiting commands in the command queue
    this._processCommands();
    // We are done with this command, call the callback
    command.callback(command.success ? null : command.error, command);
  }

}

// async function main() {
//   let client = new ClickController("127.0.0.1", 13000);
//   await client.connect();

//   try {
//     let result = await client.callReadHandler("arptable", "table");
//     // let command = new IntClickReadCommand("c", "rate");
//     // let result = await client.callReadCommand(command);
//     logger.debug("Success:", result);
//     console.log("Success:", result);
//   } catch (err) {
//     logger.error("Error:", err);
//   }
//   logger.debug("done");
//   client.disconnect();
// }

//main();

module.exports = {
  ClickController,
  ClickCommand,
  IntClickReadCommand,
  BoolClickReadCommand
};