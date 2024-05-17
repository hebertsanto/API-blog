import { AuthController } from '../presentation/controllers/auth/login-controller';

import { Router } from 'express';

export const loginRoute = Router();

loginRoute.post('/', new AuthController().handle);
