import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsNumber, IsString } from 'class-validator';
import { GradeReview } from '@prisma/client';

export class CreateGradeReviewDto implements GradeReview {
  @ApiProperty()
  @IsInt({ message: 'grade_review_id must be an integer' })
  @IsNotEmpty({ message: 'grade_review_id is required' })
  grade_review_id: number;

  @ApiProperty()
  @IsInt({ message: 'student_grade_id must be an integer' })
  @IsNotEmpty({ message: 'student_grade_id is required' })
  student_grade_id: number;

  @ApiProperty()
  @IsInt({ message: 'student_id must be an integer' })
  @IsNotEmpty({ message: 'student_id is required' })
  student_id: number;

  @ApiProperty()
  @IsInt({ message: 'teacher_id must be an integer' })
  @IsNotEmpty({ message: 'teacher_id is required' })
  teacher_id: number;

  @ApiProperty()
  @IsDate({ message: 'created_at must be a valid date' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsDate({ message: 'updated_at must be a valid date' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsNumber({}, { message: 'current_Grade must be a number' })
  @IsNotEmpty({ message: 'current_Grade is required' })
  current_Grade: number;

  @ApiProperty()
  @IsNumber({}, { message: 'expected_Grade must be a number' })
  @IsNotEmpty({ message: 'expected_Grade is required' })
  expected_Grade: number;

  @ApiProperty()
  @IsNumber({}, { message: 'final_grade must be a number' })
  @IsNotEmpty({ message: 'final_grade is required' })
  final_grade: number;

  @ApiProperty()
  @IsString({ message: 'explanation must be a string' })
  @IsNotEmpty({ message: 'explanation is required' })
  explanation: string;
}
