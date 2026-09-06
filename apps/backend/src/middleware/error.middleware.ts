// A middleware that handles errors in the application. It logs the error and sends a generic error response to the client.
import { type Request, type Response, type NextFunction } from "express";
import mongoose from "mongoose";
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
  res.status(500).json({ message: "An unexpected error occurred" });
};
