import { ApiProperty } from '@nestjs/swagger';
import { StudentGrade } from '@prisma/client';

export class StudentGradeEntity implements StudentGrade {
  @ApiProperty()
  student_grade_id: number;
  @ApiProperty()
  student_id: number;
  @ApiProperty()
  grade_composition_id: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  grade: number;
}
