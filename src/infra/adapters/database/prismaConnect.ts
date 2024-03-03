import { Logger } from '../../../utils/logger';
import { prisma } from './prismaClient';

async function main() {}
main()
  .then(async () => {
    await prisma.$connect();
    Logger.info('conneted in prisma');
  })
  .catch(async (error) => {
    await prisma.$disconnect();
    Logger.error(`some error ocurred conecting in prisma ${error}`);
  });

export default main;
