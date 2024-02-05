import express from 'express';
import { config } from 'dotenv';
config();
import { router } from '../../routes';
import { authMiddleware } from '../middlewares/auth-middleware';

export class ExpressApp {
  static start() {
    const app = express();
    app.use(express.json());
    app.use('/', authMiddleware, router);

    app.listen(process.env.PORT, () => {
      console.log('server is running');
    });
  }
}
