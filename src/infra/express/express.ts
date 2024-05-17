import { setHeaderMiddleware } from '../../presentation/middlewares/set-header-midlleware';
import { loggerMiddleware } from '../../presentation/middlewares/logger-middleware';
import { zodErrorMiddleware } from '../../presentation/middlewares/zodError-middleware';
import { logger } from '../../utils/logger';
import { router } from '../../routes';
import dotenv from 'dotenv';
import main from '../database/connection/prismaConnect';
import express from 'express';
import helmet from 'helmet';
import config from '../../config/config';

export default async function ExpressServer() {
  dotenv.config();
  const app = express();

  await main();

  app.use(helmet());
  app.use(loggerMiddleware);

  app.use(setHeaderMiddleware);

  app.use(router);

  app.use(express.json());

  app.use(zodErrorMiddleware);

  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  const port = config.port;

  app.listen(port, () => {
    logger.info(`server is running on : ${port}`);
  });
}
