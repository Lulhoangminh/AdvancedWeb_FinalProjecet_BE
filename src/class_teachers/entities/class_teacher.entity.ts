import { ApiProperty } from '@nestjs/swagger';
import { ClassTeacher } from '@prisma/client';

export class ClassTeacherEntity implements ClassTeacher {
  @ApiProperty()
  teacher_id: string;

  @ApiProperty()
  class_id: string;

  @ApiProperty()
  isOwner: boolean;
}
