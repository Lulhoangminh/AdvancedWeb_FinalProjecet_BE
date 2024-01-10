import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsNumber, IsISO8601, IsString } from 'class-validator';
import { StudentGrade } from '@prisma/client';

export class CreateStudentGradeDto {
  @ApiProperty()
  @IsString({ message: 'student_id must be an string' })
  @IsNotEmpty({ message: 'student_id is required' })
  student_id: string;

  @ApiProperty()
  @IsString({ message: 'grade_composition_id must be an string' })
  @IsNotEmpty({ message: 'grade_composition_id is required' })
  grade_composition_id: string;

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
