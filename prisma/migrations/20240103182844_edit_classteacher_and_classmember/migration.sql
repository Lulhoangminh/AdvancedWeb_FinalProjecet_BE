/*
  Warnings:

  - A unique constraint covering the columns `[student_id,class_id]` on the table `ClassMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher_id,class_id]` on the table `ClassTeacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[confirmationCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ClassMember_class_id_key";

-- DropIndex
DROP INDEX "ClassMember_student_id_key";

-- DropIndex
DROP INDEX "ClassTeacher_class_id_key";

-- DropIndex
DROP INDEX "ClassTeacher_teacher_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "ClassMember_student_id_class_id_key" ON "ClassMember"("student_id", "class_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClassTeacher_teacher_id_class_id_key" ON "ClassTeacher"("teacher_id", "class_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_confirmationCode_key" ON "User"("confirmationCode");
