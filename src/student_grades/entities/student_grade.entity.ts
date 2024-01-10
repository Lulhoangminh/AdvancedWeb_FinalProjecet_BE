import { ApiProperty } from '@nestjs/swagger';
import { StudentGrade } from '@prisma/client';

export class StudentGradeEntity implements StudentGrade {
  @ApiProperty()
  student_grade_id: string;
  @ApiProperty()
  student_id: string;
  @ApiProperty()
  grade_composition_id: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  grade: number;
}
