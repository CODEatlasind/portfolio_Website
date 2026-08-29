// A middleware that handles errors in the application. It logs the error and sends a generic error response to the client.
import { type Request, type Response, type NextFunction } from "express";
export const errorMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);
  res.status(500).json({ message: "An unexpected error occurred" });
};
