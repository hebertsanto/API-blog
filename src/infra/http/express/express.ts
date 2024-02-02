import express from 'express';
import { config } from 'dotenv';
config();
import { routes } from '../../../routes';

export class ExpressApp {
  static start() {
    const app = express();
    app.use(express.json());
    app.use(routes);

    app.listen(process.env.PORT, () => {
      console.log('server is running');
    });
  }
}
