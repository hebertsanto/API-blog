import { Router, Request, Response } from 'express';
import { createUserHandler } from '../presentation/controllers/user/create-controller';
import { getUserHandler } from '../presentation/controllers/user/get-controller';

export const userRoutes = Router();

userRoutes.get('/:id/retrieve', getUserHandler.validate, (req: Request, res: Response) =>
  getUserHandler.handle(req, res),
);

userRoutes.post('/add', createUserHandler.validate, (req: Request, res: Response) =>
  createUserHandler.handle(req, res),
);
