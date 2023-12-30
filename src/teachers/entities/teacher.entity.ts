import { ApiProperty } from '@nestjs/swagger';
import { Teacher } from '@prisma/client';

export class TeacherEntity implements Teacher {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  teacher_id: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
