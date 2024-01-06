import { ApiProperty } from '@nestjs/swagger';
import { GradeReview } from '@prisma/client';

export class GradeReviewEntity implements GradeReview {
  @ApiProperty()
  grade_review_id: number;
  @ApiProperty()
  student_grade_id: number;
  @ApiProperty()
  student_id: number;
  @ApiProperty()
  teacher_id: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  current_Grade: number;
  @ApiProperty()
  expected_Grade: number;
  @ApiProperty()
  final_grade: number;
  @ApiProperty()
  explanation: string;
}
