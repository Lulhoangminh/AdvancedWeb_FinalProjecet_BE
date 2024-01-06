import { ApiProperty } from '@nestjs/swagger';
import { ClassMember } from '@prisma/client';

export class ClassMemberEntity implements ClassMember {
  @ApiProperty()
  student_id: number;

  @ApiProperty()
  class_id: number;
}
