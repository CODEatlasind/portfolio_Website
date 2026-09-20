// A middleware that handles errors in the application. It logs the error and sends a generic error response to the client.
import { type Request, type Response, type NextFunction } from "express";
import mongoose from "mongoose";

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export const errorMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);
  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      message: "Validation error",
      error: err.message,
    });
    return;
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({
      message: "Invalid value for field",
      field: err.path,
      value: err.value,
    });
  }
  if (err instanceof NotFoundError) {
    res.status(404).json({
      message: err.message,
    });
    return;
  }
  res.status(500).json({ message: "An unexpected error occurred" });
};
