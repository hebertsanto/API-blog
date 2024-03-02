import { Logger } from '../../../utils/logger';
import { prisma } from './prismaClient';

async function main() {}
main()
  .then(async () => {
    Logger.info('prisma is running');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    Logger.error(`some error ocurred conecting in prisma ${error}`);
    await prisma.$disconnect();
    process.exit(1);
  });

export default main;
