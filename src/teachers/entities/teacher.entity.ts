import { ApiProperty } from '@nestjs/swagger';
import { Teacher } from '@prisma/client';

export class TeacherEntity implements Teacher {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  teacher_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
