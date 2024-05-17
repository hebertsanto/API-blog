import { Request, Response } from 'express';
import { ZodError } from 'zod';

export const zodErrorMiddleware = (
  error: ZodError,
  _req: Request,
  res: Response,
) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      msg: 'error validating data',
      error,
    });
  }
};
