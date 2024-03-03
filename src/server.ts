import main from './infra/adapters/database/prismaConnect';
import { app } from './infra/express/express';
import { Logger } from './utils/logger';


main();

const port = process.env.PORT;

app.listen(port, () => {
  Logger.info(`server is running on : ${port}`);
});
