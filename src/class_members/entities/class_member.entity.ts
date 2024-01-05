import { ApiProperty } from '@nestjs/swagger';

export class ClassMember {
  @ApiProperty()
  student__id: number;

  @ApiProperty()
  class_id: number;
}
