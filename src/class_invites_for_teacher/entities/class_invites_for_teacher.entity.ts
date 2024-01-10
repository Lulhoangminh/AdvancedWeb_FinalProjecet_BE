import { ApiProperty } from '@nestjs/swagger';
import { ClassInviteForTeacher } from '@prisma/client';

export class ClassInviteForTeacherEntity implements ClassInviteForTeacher {
  @ApiProperty()
  teacher_id: string;

  @ApiProperty()
  class_id: string;

  @ApiProperty()
  invited_time: Date;
}
