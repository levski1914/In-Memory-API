import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong",
  });
};
