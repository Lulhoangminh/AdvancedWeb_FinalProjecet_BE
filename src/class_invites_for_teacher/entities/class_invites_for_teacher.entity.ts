import { ApiProperty } from '@nestjs/swagger';
import { ClassInviteForTeacher } from '@prisma/client';

export class ClassInviteForTeacherEntity implements ClassInviteForTeacher {
  @ApiProperty()
  teacher_id: number;

  @ApiProperty()
  class_id: number;

  @ApiProperty()
  invited_time: Date;
}
