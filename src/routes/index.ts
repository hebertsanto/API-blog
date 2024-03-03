import { Router } from 'express';

import { authMiddleware } from '../presentation/middlewares/auth-middleware';
import { commentRoutes } from './comment-routes';
import { postRoutes } from './post-routes';
import { userRoutes } from './user-routes';
import { loginRoute } from './login-route';
import config from '../config/config';
import { categoryRoutes } from './category';

export const router = Router();

const prefix = config.prefixUrl;

router.use(`${prefix}/login`, loginRoute);
router.use(`${prefix}/users`, authMiddleware, userRoutes);
router.use(`${prefix}/comments`, authMiddleware, commentRoutes);
router.use(`${prefix}/posts`, authMiddleware, postRoutes);
router.use(`${prefix}/category`, authMiddleware, categoryRoutes);
