import { ApiProperty } from '@nestjs/swagger';

export class Student {
  @ApiProperty()
  user_id;

  @ApiProperty()
  student_id;

  @ApiProperty()
  created_at;

  @ApiProperty()
  updated_at;
}
