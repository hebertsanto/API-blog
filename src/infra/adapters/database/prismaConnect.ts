import { logger } from '../../../utils/logger';
import { prisma } from './prismaClient';

async function main() {}
main()
  .then(async () => {
    logger.info('prisma is running');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    logger.error(`some error ocurred conecting in prisma ${error}`);
    await prisma.$disconnect();
    process.exit(1);
  });

export default main;
