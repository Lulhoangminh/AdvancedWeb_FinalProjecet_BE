import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateClassMemberDto {
  @ApiProperty()
  @IsString({ message: 'Student ID must be an string' })
  @IsNotEmpty({ message: 'Student ID is required' })
  student_id: string;

  @ApiProperty()
  @IsString({ message: 'Class ID must be an string' })
  @IsNotEmpty({ message: 'Class ID is required' })
  class_id: string;
}
