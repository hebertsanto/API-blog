import { Request, Response, NextFunction } from 'express';
import { logger } from '../../infrastructure/logger';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on('finish', () => {
    const ms = Date.now() - start;
    const method = req.method;
    const originalUrl = req.originalUrl;
    const status = req.statusCode;
    const ip = req.ip;
    const timestamp = new Date().toISOString();

    logger.info(
      `[${timestamp}] - ${ip} - ${method} - ${originalUrl} - ${status} - ${ms}ms`,
    );
  });

  next();
};
