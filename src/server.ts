import main from './infra/adapters/database/prismaConnect';
import { app } from './infra/express/express';

app.listen(process.env.port, () => {
  console.log('server is running');
});

main();
