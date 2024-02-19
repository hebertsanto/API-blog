import express from 'express';
import { config } from 'dotenv';
config();
import { router } from '../../routes';
import { Request, Response } from 'express';
import { ZodError } from 'zod';

export class ExpressApp {
  static start() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(router);

    //eslint-disable-next-line
    app.use((error : any, req: Request, res: Response) => {
      if (error instanceof ZodError) {
        return res.status(400).json({
          msg: 'error validation data',
          error
        });
      }
    });

    app.listen(process.env.PORT, () => {
      console.log('server is running');
    });
  }
}
