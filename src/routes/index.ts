import { Router } from 'express';

import { authMiddleware } from '../presentation/middlewares/auth-middleware';
import { commentRoutes } from './comment-routes';
import { postRoutes } from './post-routes';
import { userRoutes } from './user-routes';
import { loginRoute } from './login-route';

export const router = Router();

const prefix = process.env.API_PREFIX;

router.use(`${prefix}/login`, loginRoute);
router.use(`${prefix}/users`, authMiddleware, userRoutes);
router.use(`${prefix}/comments`, authMiddleware, commentRoutes);
router.use(`${prefix}/posts`, authMiddleware, postRoutes);
