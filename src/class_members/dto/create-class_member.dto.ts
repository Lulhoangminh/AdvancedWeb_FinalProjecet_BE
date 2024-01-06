import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateClassMemberDto {
  @ApiProperty()
  @IsInt({ message: 'Student ID must be an integer' })
  @IsNotEmpty({ message: 'Student ID is required' })
  student_id: number;

  @ApiProperty()
  @IsInt({ message: 'Class ID must be an integer' })
  @IsNotEmpty({ message: 'Class ID is required' })
  class_id: number;
}
