import { Router } from 'express';
import { createUser } from '../http/controllers/user/create-controller';
import { deleteUser } from '../http/controllers/user/delete-controller';
import { getUserById } from '../http/controllers/user/get-controller';

export const userRoutes = Router();

userRoutes.get('/user/:id', getUserById);
userRoutes.post('/user', createUser);
userRoutes.delete('/user/:id', deleteUser);
