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
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'minhluu1101@gmail.com',
      fullname: 'Minh Luu',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: '',
      Type: 'student',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  // createdAt DateTime @default(now())
  // updatedAt DateTime @updatedAt()

  // email            String   @unique
  // fullname         String?
  // dob              DateTime @db.Date
  // hash             String
  // hashedRt         String?
  // Type             String
  // isEmailConfirmed Boolean  @default(false)
  // IsBanned         Boolean  @default(false)
  // IsLocked         Boolean  @default(false)

  console.log({ user1 });
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
