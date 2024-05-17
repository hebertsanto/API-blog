import { NextFunction, Request, Response } from 'express';

export interface handleRequestController {
  handle(req: Request, res: Response, next?: NextFunction): Promise<Response>;
}
