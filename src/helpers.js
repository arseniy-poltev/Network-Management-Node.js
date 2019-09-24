const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);
const readline = require("readline");

const getFileHash = (localFile, hashAlgo) => {
  return new Promise((resolve, reject) => {
    try {
      let cryptoStream = crypto.createHash(hashAlgo)
        .setEncoding("hex");
      fs.createReadStream(localFile)
        .on("error", reject)
        .pipe(cryptoStream)
        .once("finish", () => {
          let hash = cryptoStream.read();
          resolve(hash);
        });
    } catch (err) {
      return reject(err);
    }
  });
};

const readFileLines = (file) => {
  return new Promise((resolve, reject) => {
    let lines = [];
    let stream = fs.createReadStream(file);
    stream.on("error", (error) => {
      reject(`Error reading file: ${error.message}}`);
    });
    var lineReader = readline.createInterface({
      input: stream
    });
    lineReader.on("line", (line) => {
      let trimmedLine = line.trim();
      if (trimmedLine === "" || trimmedLine.startsWith("//") || trimmedLine.startsWith("#")) {
        return;
      }
      lines.push(line);
    });
    lineReader.on("close", () => {
      resolve(lines);
    });
  });
};

/**
 * 
 * @param {string} file
 * @param {string[]} lines
 */
const writeFileLines = async (file, lines) => {
  let data = lines.join("\n");
  return writeFile(file, data);
};

/**
 * 
 * @param {string} file
 * @param {string} line
 */
const appendFileLine = async (file, line) => {
  return appendFile(file, line);
};

const delay = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); };
const isString = (value) => { return typeof value === "string" || value instanceof String; };
const isNumber = (n) => { return !isNaN(parseFloat(n)) && isFinite(n); };

module.exports = {
  delay,
  isString,
  isNumber,
  readFileLines,
  writeFileLines,
  appendFileLine,
  getFileHash
};
