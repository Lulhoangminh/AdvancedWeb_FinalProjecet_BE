// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      createdAt   : new Date(),
      email       : 'minhluu1101@gmail.com',
      hash : '',
      hashedRt : ''
    }
    });
    const user2 = await prisma.user.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      id: 2,
      email       : 'DuyNien2202@gmail.com',
      createdAt   : new Date(),
      hash : '',
      hashedRt : ''
    }
    });    
  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });