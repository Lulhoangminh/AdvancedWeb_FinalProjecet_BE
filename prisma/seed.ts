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
      email: 'nguyenvana@gmail.com',
      fullname: 'Nguyen Van A',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: '',
      Type: 'student',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  const user2 = await prisma.user.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'randomperson@gmail.com',
      fullname: 'Random Person',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: '',
      Type: 'teacher',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  const user3 = await prisma.user.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'randomguy@gmail.com',
      fullname: 'Random Guy',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: 'admin',
      Type: '',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  const user4 = await prisma.user.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'randomperson2@gmail.com',
      fullname: 'Random Person 2',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: '',
      Type: 'teacher',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  const user5 = await prisma.user.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'randomperson 3@gmail.com',
      fullname: 'Random Person 3',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: '',
      Type: 'teacher',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  const user6 = await prisma.user.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'lethib@gmail.com',
      fullname: 'Le Thi B',
      dob: new Date('2000-01-01'),
      hash: '$2b$10$sbDJSEUQ9if.EK8fHT.lVuJqKxyzW7Z1r7kl5l9WnvtaXSvHBKtQm',
      hashedRt: '',
      Type: 'student',
      isEmailConfirmed: true,
      IsBanned: false,
      IsLocked: false,
    },
  });

  const user7 = await prisma.user.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'ngovanc@gmail.com',
      fullname: 'Ngo Van C',
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
      user_id: 2,
    },
    update: {},
    create: {
      user_id: 2,
      teacher_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const teacher2 = await prisma.teacher.upsert({
    where: {
      user_id: 4,
    },
    update: {},
    create: {
      user_id: 4,
      teacher_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const teacher3 = await prisma.teacher.upsert({
    where: {
      user_id: 5,
    },
    update: {},
    create: {
      user_id: 5,
      teacher_id: 3,
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

  const student2 = await prisma.student.upsert({
    where: {
      user_id: 6,
    },
    update: {},
    create: {
      user_id: 6,
      student_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const student3 = await prisma.student.upsert({
    where: {
      user_id: 7,
    },
    update: {},
    create: {
      user_id: 7,
      student_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const admin1 = await prisma.admin.upsert({
    where: {
      user_id: 3,
    },
    update: {},
    create: {
      user_id: 3,
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

  const class2 = await prisma.class.upsert({
    where: {
      class_id: 2,
    },
    update: {},
    create: {
      class_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      invite_code: 'fjadsiofj21d',
      invite_link: 'https://dummylink.com/invite/fjadsiofj21d',
      status: 'active',
      description: 'this is a dummy class 2',
    },
  });
  const class3 = await prisma.class.upsert({
    where: {
      class_id: 3,
    },
    update: {},
    create: {
      class_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      invite_code: '128390j890sa',
      invite_link: 'https://dummylink.com/invite/128390j890sa',
      status: 'active',
      description: 'this is a dummy class 3',
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

  const class_teacher2 = await prisma.classTeacher.upsert({
    where: {
      teacher_id_class_id: {
        teacher_id: 1,
        class_id: 2,
      },
    },
    update: {},
    create: {
      teacher_id: 1,
      class_id: 2,
    },
  });

  const class_teacher3 = await prisma.classTeacher.upsert({
    where: {
      teacher_id_class_id: {
        teacher_id: 2,
        class_id: 1,
      },
    },
    update: {},
    create: {
      teacher_id: 2,
      class_id: 1,
    },
  });

  const class_teacher4 = await prisma.classTeacher.upsert({
    where: {
      teacher_id_class_id: {
        teacher_id: 2,
        class_id: 2,
      },
    },
    update: {},
    create: {
      teacher_id: 2,
      class_id: 2,
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

  const class_student2 = await prisma.classMember.upsert({
    where: {
      student_id_class_id: {
        student_id: 1,
        class_id: 2,
      },
    },
    update: {},
    create: {
      student_id: 1,
      class_id: 2,
    },
  });

  const class_student3 = await prisma.classMember.upsert({
    where: {
      student_id_class_id: {
        student_id: 2,
        class_id: 1,
      },
    },
    update: {},
    create: {
      student_id: 2,
      class_id: 1,
    },
  });

  const class_student4 = await prisma.classMember.upsert({
    where: {
      student_id_class_id: {
        student_id: 2,
        class_id: 2,
      },
    },
    update: {},
    create: {
      student_id: 2,
      class_id: 2,
    },
  });

  const class_invite_for_teacher1 = await prisma.classInviteForTeacher.upsert({
    where: {
      class_id_teacher_id: {
        teacher_id: 1,
        class_id: 3,
      },
    },
    update: {},
    create: {
      teacher_id: 1,
      class_id: 3,
      invited_time: new Date(),
    },
  });

  const class_invite_for_teacher2 = await prisma.classInviteForTeacher.upsert({
    where: {
      class_id_teacher_id: {
        teacher_id: 2,
        class_id: 3,
      },
    },
    update: {},
    create: {
      teacher_id: 2,
      class_id: 3,
      invited_time: new Date(),
    },
  });

  const class_invite_for_student1 = await prisma.classInviteForStudent.upsert({
    where: {
      student_id_class_id: {
        student_id: 1,
        class_id: 3,
      },
    },
    update: {},
    create: {
      student_id: 1,
      class_id: 3,
      invited_time: new Date(),
    },
  });

  const class_invite_for_student2 = await prisma.classInviteForStudent.upsert({
    where: {
      student_id_class_id: {
        student_id: 2,
        class_id: 3,
      },
    },
    update: {},
    create: {
      student_id: 2,
      class_id: 3,
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
      name: 'Homework',
      Percentage: 30,
      Rank: 3,
      IsFinalized: false,
    },
  });

  const grade_composition2 = await prisma.gradeComposition.upsert({
    where: {
      grade_composition_id: 2,
    },
    update: {},
    create: {
      grade_composition_id: 2,
      class_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Midterm',
      Percentage: 20,
      Rank: 2,
      IsFinalized: false,
    },
  });

  const grade_composition3 = await prisma.gradeComposition.upsert({
    where: {
      grade_composition_id: 3,
    },
    update: {},
    create: {
      grade_composition_id: 3,
      class_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Final',
      Percentage: 50,
      Rank: 1,
      IsFinalized: false,
    },
  });

  const grade_composition4 = await prisma.gradeComposition.upsert({
    where: {
      grade_composition_id: 4,
    },
    update: {},
    create: {
      grade_composition_id: 4,
      class_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Homework',
      Percentage: 30,
      Rank: 3,
      IsFinalized: false,
    },
  });

  const grade_composition5 = await prisma.gradeComposition.upsert({
    where: {
      grade_composition_id: 5,
    },
    update: {},
    create: {
      grade_composition_id: 5,
      class_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Midterm',
      Percentage: 20,
      Rank: 2,
      IsFinalized: false,
    },
  });

  const grade_composition6 = await prisma.gradeComposition.upsert({
    where: {
      grade_composition_id: 6,
    },
    update: {},
    create: {
      grade_composition_id: 6,
      class_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Final',
      Percentage: 50,
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
      grade: 8,
    },
  });

  const student_grade2 = await prisma.studentGrade.upsert({
    where: {
      student_grade_id: 2,
    },
    update: {},
    create: {
      student_grade_id: 2,
      student_id: 1,
      grade_composition_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      grade: 9,
    },
  });

  const student_grade3 = await prisma.studentGrade.upsert({
    where: {
      student_grade_id: 3,
    },
    update: {},
    create: {
      student_grade_id: 3,
      student_id: 1,
      grade_composition_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      grade: 10,
    },
  });

  const student_grade4 = await prisma.studentGrade.upsert({
    where: {
      student_grade_id: 4,
    },
    update: {},
    create: {
      student_grade_id: 4,
      student_id: 2,
      grade_composition_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      grade: 5,
    },
  });

  const student_grade5 = await prisma.studentGrade.upsert({
    where: {
      student_grade_id: 5,
    },
    update: {},
    create: {
      student_grade_id: 5,
      student_id: 2,
      grade_composition_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
      grade: 6,
    },
  });

  const student_grade6 = await prisma.studentGrade.upsert({
    where: {
      student_grade_id: 6,
    },
    update: {},
    create: {
      student_grade_id: 6,
      student_id: 2,
      grade_composition_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
      grade: 7,
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
      expected_Grade: 8,
      final_grade: 9,
      explanation: 'dummy explanation 1',
    },
  });

  const grade_review2 = await prisma.gradeReview.upsert({
    where: {
      grade_review_id: 2,
    },
    update: {},
    create: {
      grade_review_id: 2,
      student_grade_id: 2,
      student_id: 1,
      teacher_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      current_Grade: 6,
      expected_Grade: 10,
      final_grade: 9,
      explanation: 'dummy explanation 2',
    },
  });

  const grade_review3 = await prisma.gradeReview.upsert({
    where: {
      grade_review_id: 3,
    },
    update: {},
    create: {
      grade_review_id: 3,
      student_grade_id: 3,
      student_id: 1,
      teacher_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      current_Grade: 9,
      expected_Grade: 10,
      final_grade: 9,
      explanation: 'dummy explanation 3',
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
      comment: 'dummy comment 1',
    },
  });

  const comment2 = await prisma.comment.upsert({
    where: {
      comment_id: 2,
    },
    update: {},
    create: {
      comment_id: 2,
      grade_review_id: 2,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      comment: 'dummy comment 2',
    },
  });

  const comment3 = await prisma.comment.upsert({
    where: {
      comment_id: 3,
    },
    update: {},
    create: {
      comment_id: 3,
      grade_review_id: 3,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      comment: 'dummy comment 3',
    },
  });

  // console.log({});
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
