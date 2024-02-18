import { prisma } from './prismaClient';

async function main() {}
main()
  .then(async () => {
    console.log('prisma is running');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default main;
