import { logger } from '../../logger';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    logger.info('Connected to Prisma');
  } catch (error) {
    logger.error(`An error occurred while connecting to Prisma: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

main();
export default main;
