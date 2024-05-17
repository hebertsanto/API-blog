import { AuthController } from '../presentation/controllers/auth/loginController';

import { Router } from 'express';

export const loginRoute = Router();

loginRoute.post('/', new AuthController().handle);
