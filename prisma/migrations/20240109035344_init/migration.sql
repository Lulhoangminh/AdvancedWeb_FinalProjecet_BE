-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL,
    "email" TEXT NOT NULL,
    "fullname" TEXT,
    "dob" DATE,
    "hash" TEXT,
    "hashedRt" TEXT,
    "Type" TEXT,
    "confirmationCode" TEXT,
    "isEmailConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "IsBanned" BOOLEAN NOT NULL DEFAULT false,
    "IsLocked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "user_id" INTEGER NOT NULL,
    "teacher_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("teacher_id")
);

-- CreateTable
CREATE TABLE "Student" (
    "user_id" INTEGER NOT NULL,
    "student_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "user_id" INTEGER NOT NULL,
    "admin_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "Class" (
    "class_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "invite_code" TEXT NOT NULL,
    "invite_link" TEXT NOT NULL,
    "class_name" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "description" TEXT,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("class_id")
);

-- CreateTable
CREATE TABLE "ClassTeacher" (
    "teacher_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ClassMember" (
    "student_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ClassInviteForTeacher" (
    "teacher_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,
    "invited_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ClassInviteForStudent" (
    "student_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,
    "invited_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "GradeComposition" (
    "grade_composition_id" SERIAL NOT NULL,
    "class_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "Percentage" INTEGER NOT NULL,
    "Rank" INTEGER NOT NULL,
    "IsFinalized" BOOLEAN NOT NULL,

    CONSTRAINT "GradeComposition_pkey" PRIMARY KEY ("grade_composition_id")
);

-- CreateTable
CREATE TABLE "StudentGrade" (
    "student_grade_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "grade_composition_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "StudentGrade_pkey" PRIMARY KEY ("student_grade_id")
);

-- CreateTable
CREATE TABLE "GradeReview" (
    "grade_review_id" SERIAL NOT NULL,
    "student_grade_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "current_Grade" INTEGER NOT NULL,
    "expected_Grade" INTEGER NOT NULL,
    "final_grade" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,

    CONSTRAINT "GradeReview_pkey" PRIMARY KEY ("grade_review_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" SERIAL NOT NULL,
    "grade_review_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_confirmationCode_key" ON "User"("confirmationCode");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_user_id_key" ON "Teacher"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_user_id_key" ON "Student"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_user_id_key" ON "Admin"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Class_invite_code_key" ON "Class"("invite_code");

-- CreateIndex
CREATE UNIQUE INDEX "Class_invite_link_key" ON "Class"("invite_link");

-- CreateIndex
CREATE UNIQUE INDEX "ClassTeacher_teacher_id_class_id_key" ON "ClassTeacher"("teacher_id", "class_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClassMember_student_id_class_id_key" ON "ClassMember"("student_id", "class_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClassInviteForTeacher_class_id_teacher_id_key" ON "ClassInviteForTeacher"("class_id", "teacher_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClassInviteForStudent_student_id_class_id_key" ON "ClassInviteForStudent"("student_id", "class_id");

-- CreateIndex
CREATE UNIQUE INDEX "GradeReview_student_grade_id_key" ON "GradeReview"("student_grade_id");
