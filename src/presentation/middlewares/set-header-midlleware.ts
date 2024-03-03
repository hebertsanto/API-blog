import { NextFunction, Request, Response } from 'express';

export const setHeaderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );

  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-type, Authorization, Cache-control, Pragma',
  );
  next();
};
