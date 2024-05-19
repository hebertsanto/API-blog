import { Router } from 'express';
import { authMiddleware } from '../presentation/middlewares/auth-middleware';
import { commentRoutes } from './comment-routes';
import { postRoutes } from './post-routes';
import { userRoutes } from './user-routes';
import { loginRoute } from './login-route';
import { categoryRoutes } from './category-routes';

export const v1Router = Router();

v1Router.use('/auth', loginRoute);
v1Router.use('/users', authMiddleware, userRoutes);
v1Router.use('/comments', authMiddleware, commentRoutes);
v1Router.use('/posts', authMiddleware, postRoutes);
v1Router.use('/category', authMiddleware, categoryRoutes);
