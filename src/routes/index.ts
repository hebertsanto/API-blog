import { Router } from 'express';

import { authMiddleware } from '../http/middlewares/auth-middleware';
import { commentRoutes } from './comment-routes';
import { postRoutes } from './post-routes';
import { userRoutes } from './user-routes';
import { loginRoute } from './login-route';

export const router = Router();

router.use('/', loginRoute);
router.use('/', authMiddleware, commentRoutes);
router.use('/', authMiddleware, postRoutes);
router.use('/', authMiddleware, userRoutes);
