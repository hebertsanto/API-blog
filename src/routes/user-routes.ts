import { Router, Request, Response } from 'express';
import {
  CreateUserController,
  createUserHandler,
} from '../presentation/controllers/user/create-controller';
import { GetUserController } from '../presentation/controllers/user/get-controller';

export const userRoutes = Router();

userRoutes.get('/:id/retrieve', new GetUserController().handle);

userRoutes.post('/add', createUserHandler.validate, (req: Request, res: Response) =>
  createUserHandler.handle(req, res),
);
