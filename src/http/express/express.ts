import express from 'express';
import { config } from 'dotenv';
config();
import { router } from '../../routes';

export class ExpressApp {
  static start() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded( { extended: true } ));
    app.use(router);

    app.listen(process.env.PORT, () => {
      console.log('server is running');
    });
  }
}
