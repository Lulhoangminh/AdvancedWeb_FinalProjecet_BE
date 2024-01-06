import { ApiProperty } from '@nestjs/swagger';
import { ClassInviteForStudent } from '@prisma/client';

export class ClassInvitesForStudentEntity implements ClassInviteForStudent {
  @ApiProperty()
  student_id: number;
  @ApiProperty()
  class_id: number;
  @ApiProperty()
  invited_time: Date;
}
