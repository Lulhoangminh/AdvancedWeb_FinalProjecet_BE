import { ApiProperty } from '@nestjs/swagger';
import { Class } from '@prisma/client';

export class ClassEntity implements Class {
  @ApiProperty()
  class_id: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  invite_code: string;
  @ApiProperty()
  invite_link: string;
  @ApiProperty()
  class_name: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  description: string;
}
