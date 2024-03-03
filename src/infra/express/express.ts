import express from 'express';
import { config } from 'dotenv';
config();
import { router } from '../../routes';
import { loggerMiddleware } from '../../presentation/middlewares/logger-middleware';
import { zodErrorMiddleware } from '../../presentation/middlewares/zodError-middleware';

export const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.use(router);
app.use(zodErrorMiddleware);
app.use(express.urlencoded({ extended: true }));
