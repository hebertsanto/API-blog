import express from 'express';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { routes } from './routes';
config();

const app = express();

app.use(express.json());
app.use(routes);

const prisma = new PrismaClient();
async function main() {}
main()
  .then(async () => {
    console.log('tudo certo com o prisma');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
  
app.listen(4000, () => {
  console.log('serve is running');
});
