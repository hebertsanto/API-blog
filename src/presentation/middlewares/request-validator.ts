import { NextFunction, Request, Response } from 'express';
import { ErrorFormatter, validationResult } from 'express-validator';

const requestValidator: ErrorFormatter = ({ msg, param }: any) => {
  return { parameter: param, message: msg };
};

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  const errors = validationResult(req).formatWith(requestValidator).array();
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  next();
};
