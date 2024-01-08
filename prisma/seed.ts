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

  const teacher1 = await prisma.teacher.upsert({
    where: {
      user_id: 1,
    },
    update: {},
    create: {
      user_id: 1,
      teacher_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const student1 = await prisma.student.upsert({
    where: {
      user_id: 1,
    },
    update: {},
    create: {
      user_id: 1,
      student_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const admin1 = await prisma.admin.upsert({
    where: {
      user_id: 1,
    },
    update: {},
    create: {
      user_id: 1,
      admin_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const class1 = await prisma.class.upsert({
    where: {
      class_id: 1,
    },
    update: {},
    create: {
      class_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      invite_code: '21u389012jo',
      invite_link: 'https://dummylink.com/invite/21u389012jo',
      status: 'active',
      description: 'this is a dummy class',
    },
  });

  const class_teacher1 = await prisma.classTeacher.upsert({
    where: {
      teacher_id_class_id: {
        teacher_id: 1,
        class_id: 1,
      },
    },
    update: {},
    create: {
      teacher_id: 1,
      class_id: 1,
    },
  });

  const class_student1 = await prisma.classMember.upsert({
    where: {
      student_id_class_id: {
        student_id: 1,
        class_id: 1,
      },
    },
    update: {},
    create: {
      student_id: 1,
      class_id: 1,
    },
  });

  const class_invite_for_teacher1 = await prisma.classInviteForTeacher.upsert({
    where: {
      class_id_teacher_id: {
        teacher_id: 1,
        class_id: 1,
      },
    },
    update: {},
    create: {
      teacher_id: 1,
      class_id: 1,
      invited_time: new Date(),
    },
  });

  const class_invite_for_student1 = await prisma.classInviteForStudent.upsert({
    where: {
      student_id_class_id: {
        student_id: 1,
        class_id: 1,
      },
    },
    update: {},
    create: {
      student_id: 1,
      class_id: 1,
      invited_time: new Date(),
    },
  });

  const grade_composition1 = await prisma.gradeComposition.upsert({
    where: {
      grade_composition_id: 1,
    },
    update: {},
    create: {
      grade_composition_id: 1,
      class_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'dummy grade composition',
      Percentage: 10,
      Rank: 1,
      IsFinalized: false,
    },
  });

  const student_grade1 = await prisma.studentGrade.upsert({
    where: {
      student_grade_id: 1,
    },
    update: {},
    create: {
      student_grade_id: 1,
      student_id: 1,
      grade_composition_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      grade: 10,
    },
  });

  const grade_review1 = await prisma.gradeReview.upsert({
    where: {
      grade_review_id: 1,
    },
    update: {},
    create: {
      grade_review_id: 1,
      student_grade_id: 1,
      student_id: 1,
      teacher_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      current_Grade: 8,
      expected_Grade: 10,
      final_grade: 9,
      explanation: 'dummy explanation',
    },
  });

  const comment1 = await prisma.comment.upsert({
    where: {
      comment_id: 1,
    },
    update: {},
    create: {
      comment_id: 1,
      grade_review_id: 1,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      comment: 'dummy comment',
    },
  });

  console.log({
    user1,
    teacher1,
    student1,
    admin1,
    class1,
    class_teacher1,
    class_student1,
    class_invite_for_teacher1,
    class_invite_for_student1,
    grade_composition1,
    student_grade1,
    grade_review1,
    comment1,
  });
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
