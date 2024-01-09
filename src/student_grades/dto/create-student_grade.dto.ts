import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsNumber, IsISO8601 } from 'class-validator';
import { StudentGrade } from '@prisma/client';

export class CreateStudentGradeDto implements StudentGrade {
  @ApiProperty()
  @IsInt({ message: 'student_grade_id must be an integer' })
  @IsNotEmpty({ message: 'student_grade_id is required' })
  student_grade_id: number;

  @ApiProperty()
  @IsInt({ message: 'student_id must be an integer' })
  @IsNotEmpty({ message: 'student_id is required' })
  student_id: number;

  @ApiProperty()
  @IsInt({ message: 'grade_composition_id must be an integer' })
  @IsNotEmpty({ message: 'grade_composition_id is required' })
  grade_composition_id: number;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for update_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsNumber({}, { message: 'grade must be a number' })
  @IsNotEmpty({ message: 'grade is required' })
  grade: number;
}
