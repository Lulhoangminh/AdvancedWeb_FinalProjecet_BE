import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
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
  @IsDate({ message: 'created_at must be a valid date' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsDate({ message: 'updated_at must be a valid date' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsNumber({}, { message: 'grade must be a number' })
  @IsNotEmpty({ message: 'grade is required' })
  grade: number;
}
