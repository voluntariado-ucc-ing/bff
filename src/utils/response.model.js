class Response {
  constructor(body, error, status) {
    this.body = body;
    this.error = error || null;
    this.status = status;
  }
}

exports.Response = Response;