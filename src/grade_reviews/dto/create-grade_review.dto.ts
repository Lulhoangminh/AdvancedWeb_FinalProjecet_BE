import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsNumber, IsString, IsISO8601 } from 'class-validator';
import { GradeReview } from '@prisma/client';

export class CreateGradeReviewDto {
  @ApiProperty()
  @IsString({ message: 'student_grade_id must be an string' })
  @IsNotEmpty({ message: 'student_grade_id is required' })
  student_grade_id: string;

  @ApiProperty()
  @IsString({ message: 'student_id must be an string' })
  @IsNotEmpty({ message: 'student_id is required' })
  student_id: string;

  @ApiProperty()
  @IsString({ message: 'teacher_id must be an string' })
  @IsNotEmpty({ message: 'teacher_id is required' })
  teacher_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for update_at' })
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
