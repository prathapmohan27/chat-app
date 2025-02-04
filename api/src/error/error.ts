class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };
