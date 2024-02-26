import main from './infra/adapters/database/prismaConnect';
import { app } from './infra/express/express';

app.listen(process.env.PORT, () => {
  console.log('server is running');
});

main();
