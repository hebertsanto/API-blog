import main from './adapters/database/prismaConnect';
import { ExpressApp } from './infra/http/express/express';

ExpressApp.start();
main();
