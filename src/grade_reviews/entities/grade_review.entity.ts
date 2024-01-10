import { ApiProperty } from '@nestjs/swagger';
import { GradeReview } from '@prisma/client';

export class GradeReviewEntity implements GradeReview {
  @ApiProperty()
  grade_review_id: string;
  @ApiProperty()
  student_grade_id: string;
  @ApiProperty()
  student_id: string;
  @ApiProperty()
  teacher_id: string;
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
