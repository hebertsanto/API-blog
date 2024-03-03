import { Router } from 'express';
import { createUser } from '../presentation/controllers/user/create-controller';
import { getUserById } from '../presentation/controllers/user/get-controller';

export const userRoutes = Router();

userRoutes.get('/:id', getUserById);
userRoutes.post('/', createUser);
