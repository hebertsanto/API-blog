import { loginController } from '../presentation/controllers/auth/loginController';

import { Router } from 'express';

export const loginRoute = Router();

loginRoute.post('/login', loginController);
