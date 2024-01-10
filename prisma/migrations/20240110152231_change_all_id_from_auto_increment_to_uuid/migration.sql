/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Class` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GradeComposition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GradeReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StudentGrade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "admin_id" DROP DEFAULT,
ALTER COLUMN "admin_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id");
DROP SEQUENCE "Admin_admin_id_seq";

-- AlterTable
ALTER TABLE "Class" DROP CONSTRAINT "Class_pkey",
ALTER COLUMN "class_id" DROP DEFAULT,
ALTER COLUMN "class_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Class_pkey" PRIMARY KEY ("class_id");
DROP SEQUENCE "Class_class_id_seq";

-- AlterTable
ALTER TABLE "ClassInviteForStudent" ALTER COLUMN "student_id" SET DATA TYPE TEXT,
ALTER COLUMN "class_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ClassInviteForTeacher" ALTER COLUMN "teacher_id" SET DATA TYPE TEXT,
ALTER COLUMN "class_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ClassMember" ALTER COLUMN "student_id" SET DATA TYPE TEXT,
ALTER COLUMN "class_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ClassTeacher" ALTER COLUMN "teacher_id" SET DATA TYPE TEXT,
ALTER COLUMN "class_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
ALTER COLUMN "comment_id" DROP DEFAULT,
ALTER COLUMN "comment_id" SET DATA TYPE TEXT,
ALTER COLUMN "grade_review_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id");
DROP SEQUENCE "Comment_comment_id_seq";

-- AlterTable
ALTER TABLE "GradeComposition" DROP CONSTRAINT "GradeComposition_pkey",
ALTER COLUMN "grade_composition_id" DROP DEFAULT,
ALTER COLUMN "grade_composition_id" SET DATA TYPE TEXT,
ALTER COLUMN "class_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "GradeComposition_pkey" PRIMARY KEY ("grade_composition_id");
DROP SEQUENCE "GradeComposition_grade_composition_id_seq";

-- AlterTable
ALTER TABLE "GradeReview" DROP CONSTRAINT "GradeReview_pkey",
ALTER COLUMN "grade_review_id" DROP DEFAULT,
ALTER COLUMN "grade_review_id" SET DATA TYPE TEXT,
ALTER COLUMN "student_grade_id" SET DATA TYPE TEXT,
ALTER COLUMN "student_id" SET DATA TYPE TEXT,
ALTER COLUMN "teacher_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "GradeReview_pkey" PRIMARY KEY ("grade_review_id");
DROP SEQUENCE "GradeReview_grade_review_id_seq";

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "student_id" DROP DEFAULT,
ALTER COLUMN "student_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id");
DROP SEQUENCE "Student_student_id_seq";

-- AlterTable
ALTER TABLE "StudentGrade" DROP CONSTRAINT "StudentGrade_pkey",
ALTER COLUMN "student_grade_id" DROP DEFAULT,
ALTER COLUMN "student_grade_id" SET DATA TYPE TEXT,
ALTER COLUMN "student_id" SET DATA TYPE TEXT,
ALTER COLUMN "grade_composition_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "StudentGrade_pkey" PRIMARY KEY ("student_grade_id");
DROP SEQUENCE "StudentGrade_student_grade_id_seq";

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "teacher_id" DROP DEFAULT,
ALTER COLUMN "teacher_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("teacher_id");
DROP SEQUENCE "Teacher_teacher_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";
