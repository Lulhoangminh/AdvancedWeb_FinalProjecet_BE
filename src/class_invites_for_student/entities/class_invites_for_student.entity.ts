import { ApiProperty } from '@nestjs/swagger';
import { ClassInviteForStudent } from '@prisma/client';

export class ClassInvitesForStudentEntity implements ClassInviteForStudent {
  @ApiProperty()
  student_id: string;
  @ApiProperty()
  class_id: string;
  @ApiProperty()
  invited_time: Date;
}
