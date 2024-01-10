-- CreateIndex
CREATE INDEX "ClassInviteForStudent_class_id_idx" ON "ClassInviteForStudent"("class_id");

-- CreateIndex
CREATE INDEX "ClassInviteForTeacher_teacher_id_idx" ON "ClassInviteForTeacher"("teacher_id");

-- CreateIndex
CREATE INDEX "ClassMember_class_id_idx" ON "ClassMember"("class_id");

-- CreateIndex
CREATE INDEX "ClassTeacher_class_id_idx" ON "ClassTeacher"("class_id");

-- CreateIndex
CREATE INDEX "Comment_user_id_idx" ON "Comment"("user_id");

-- CreateIndex
CREATE INDEX "Comment_grade_review_id_idx" ON "Comment"("grade_review_id");

-- CreateIndex
CREATE INDEX "GradeComposition_class_id_idx" ON "GradeComposition"("class_id");

-- CreateIndex
CREATE INDEX "GradeReview_student_id_idx" ON "GradeReview"("student_id");

-- CreateIndex
CREATE INDEX "GradeReview_teacher_id_idx" ON "GradeReview"("teacher_id");

-- CreateIndex
CREATE INDEX "StudentGrade_student_id_idx" ON "StudentGrade"("student_id");

-- CreateIndex
CREATE INDEX "StudentGrade_grade_composition_id_idx" ON "StudentGrade"("grade_composition_id");
