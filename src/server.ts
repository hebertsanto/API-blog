import main from './infra/adapters/database/prismaConnect';
import { app } from './infra/express/express';

app.listen(2000, () => {
  console.log('server is running');
});

main();
