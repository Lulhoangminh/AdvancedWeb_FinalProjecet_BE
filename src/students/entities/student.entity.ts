import { ApiProperty } from '@nestjs/swagger';
import { Student } from '@prisma/client';

export class StudentEntity implements Student {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  student_id: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
