import config from './config/config';
import { ExpressApp } from './infra/express/express';
import main from './infra/database/connection/prismaConnect';

const app = new ExpressApp();
main();
app.start(config.port as number);
