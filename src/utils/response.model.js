class Response {
  constructor(body) {
    this.body = body || {};
    this.error = null;
  }
}

exports.Response = Response;

class ResponseError {
  constructor(code, message, description) {
    this.body = null;
    this.status = code;
    this.error = {
        code,
        message,
        description
    }
  }
}

exports.ResponseError = ResponseError;
