import { Router } from 'express';

import { authMiddleware } from '../http/middlewares/auth-middleware';
import { commentRoutes } from './comment-routes';
import { postRoutes } from './post-routes';
import { userRoutes } from './user-routes';
import { loginRoute } from './login-route';

export const router = Router();

router.use(authMiddleware);
router.use('/', commentRoutes);
router.use('/', postRoutes);
router.use('/', userRoutes);
router.use('/', loginRoute);

