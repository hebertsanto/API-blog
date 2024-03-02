import main from './infra/adapters/database/prismaConnect';
import { app } from './infra/express/express';
import { Logger } from './utils/logger';

main();

app.listen(process.env.PORT, () => {
  Logger.info(' server is running');
});

