import { Router } from 'express';
import { CreateUserController } from '../presentation/controllers/user/create-controller';
import { GetUserController } from '../presentation/controllers/user/get-controller';

export const userRoutes = Router();

userRoutes.get('/:id/retrieve', new GetUserController().handle);
userRoutes.post('/add', new CreateUserController().handle);
