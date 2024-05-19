import config from './config/config';
import { ExpressApp } from './infrastructure/express';
import main from './infrastructure/database/connection/prisma-connection';

const app = new ExpressApp();
main();
app.start(config.port as number);
