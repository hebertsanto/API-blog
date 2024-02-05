import main from './adapters/database/prismaConnect';
import { ExpressApp } from './http/express/express';

ExpressApp.start();
main();
