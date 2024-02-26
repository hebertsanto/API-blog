import { Request, Response } from 'express';
import { ZodError } from 'zod';

export const zodErrorMiddleware = (
  error: ZodError,
  req: Request,
  res: Response,
) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      msg: 'error validation data',
      error,
    });
  }
};
