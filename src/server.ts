import main from './infra/adapters/database/prismaConnect';
import { ExpressApp } from './infra/express/express';

ExpressApp.start();
main();
