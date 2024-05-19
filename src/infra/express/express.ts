import { Request, Response, Express } from 'express';
import { loggerMiddleware } from '../../presentation/middlewares/logger-middleware';
import { zodErrorMiddleware } from '../../presentation/middlewares/zodError-middleware';
import { logger } from '../../utils/logger';
import { v1Router } from '../../routes';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';

export class ExpressApp {
  private expressApp: Express;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.expressApp.use(zodErrorMiddleware);
    this.expressApp.use(loggerMiddleware);
    this.expressApp.use(helmet());
    this.expressApp.use(compression());
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true, limit: '50mb' }));
  }

  private routes() {
    const prefixRouter = '/api/v1';

    this.expressApp.use(prefixRouter, v1Router);

    this.expressApp.get('/health', (_req: Request, res: Response) => {
      return res.status(200).json({
        message: 'Server up',
        date: new Date().toISOString(),
      });
    });
  }
  public start(port: number) {
    this.expressApp.listen(port, () => {
      logger.info('Sever is running !');
    });
  }
}
