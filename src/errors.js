const messages = require("./grpc/error_pb");

const ErrorCode = {
  // General
  UNKNOWN: 1, // HTTP 500 - Unknown error occurred.
  SERVICE_UNAVAILABLE: 2, // HTTP 503 - Service unavailable e.g. during maintenance.
  NOT_FOUND: 3, // HTTP 404 - API or page not found.
  // Authentication and Authorization
  UNAUTHENTICATED: 100, // HTTP 401 - User not logged in, require authentication.
  UNAUTHORIZED: 101, // HTTP 403 - Permission denied, user not authorized for the action.
  AUTHENTICATION_FAILED: 102, // HTTP 400 - Username or password is incorrect during login.
  // Resource
  RESOURCE_NOT_FOUND: 200, // HTTP 400 - Resource not found e.g. invalid device ID.
  ALREADY_EXISTS: 201, // HTTP 409 - Attempting to create a resource that already exists.
  DEVICE_OFFLINE: 202, // HTTP 502 - The specific Wanos device is currently offline.
  // URI or Query parameters
  INVALID_ARGUMENT: 300, // HTTP 400 - Client supplied argument is invalid e.g. invalid date range.
  VALIDATION: 400, // HTTP 400 - Validation error on post.
  // RPC
  DEADLINE_EXCEEDED: 600 // HTTP 504 - RPC to Wanos device timed out.
};

const ValidationCode = {
  // All
  REQUIRED: 1,
  INVALID_TYPE: 2,
  UNIQUE: 3,
  // Strings
  MIN_LENGTH: 100,
  MAX_LENGTH: 101,
  COMPARE: 102,
  ENUM: 103,
  EMAIL: 104,
  // Numbers
  MIN_RANGE: 201,
  MAX_RANGE: 202,
  // Password
  INVALID_PASSWORD: 300,
  // DB Relationships
  RESOURCE_NOT_FOUND: 400
};

class RpcError extends Error {
  constructor(rpcError, ...params) {
    super(...params);
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RpcError);
    }
    this.rpcError = rpcError;
  }
}

class InvalidArgumentError extends RpcError {
  constructor(field, message, ...params) {
    let rpcError = new messages.Error();
    rpcError.setCode(ErrorCode.INVALID_ARGUMENT);
    rpcError.setMessage("Invalid Argument");
    let errorField = new messages.ErrorField();
    errorField.setField(field);
    errorField.setMessage(message);
    rpcError.setFieldList([errorField]);
    super(rpcError, ...params);
  }
}

class ValidationError extends RpcError {
  constructor(field, message, code, ...params) {
    let rpcError = new messages.Error();
    rpcError.setCode(ErrorCode.VALIDATION);
    rpcError.setMessage("Validation Error.");
    let errorField = new messages.ErrorField();
    errorField.setField(field);
    errorField.setMessage(message);
    errorField.setCode(code);
    rpcError.setFieldList([errorField]);
    super(rpcError, ...params);
  }
}

class RpcErrorFactory {
  constructor() {}

  static GetUnknownError(error) {
    let rpcError = new messages.Error();
    rpcError.setCode(ErrorCode.UNKNOWN);
    rpcError.setMessage(`Unknown error occurred: ${error.message}`);
    return rpcError;
  }
}

module.exports = {
  ErrorCode,
  ValidationCode,
  RpcErrorFactory,
  RpcError,
  InvalidArgumentError,
  ValidationError
};