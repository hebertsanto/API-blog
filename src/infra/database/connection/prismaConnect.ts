import { Logger } from '../../../utils/logger';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    Logger.info('Connected to Prisma');
  } catch (error) {
    Logger.error(`An error occurred while connecting to Prisma: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

main();
export default main;
