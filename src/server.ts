import main from './infra/adapters/database/prismaConnect';
import { app } from './infra/express/express';
import { logger } from './utils/logger';

main();

app.listen(process.env.PORT, () => {
  logger.info('server is running');
});
