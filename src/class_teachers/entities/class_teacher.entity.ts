import { ApiProperty } from '@nestjs/swagger';
import { ClassTeacher } from '@prisma/client';

export class ClassTeacherEntity implements ClassTeacher {
  @ApiProperty()
  teacher_id: number;

  @ApiProperty()
  class_id: number;
}
