/*
  Warnings:

  - A unique constraint covering the columns `[student_id,class_id]` on the table `ClassInviteForStudent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[class_id,teacher_id]` on the table `ClassInviteForTeacher` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ClassInviteForStudent_class_id_key";

-- DropIndex
DROP INDEX "ClassInviteForStudent_student_id_key";

-- DropIndex
DROP INDEX "ClassInviteForTeacher_class_id_key";

-- DropIndex
DROP INDEX "ClassInviteForTeacher_teacher_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "ClassInviteForStudent_student_id_class_id_key" ON "ClassInviteForStudent"("student_id", "class_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClassInviteForTeacher_class_id_teacher_id_key" ON "ClassInviteForTeacher"("class_id", "teacher_id");
