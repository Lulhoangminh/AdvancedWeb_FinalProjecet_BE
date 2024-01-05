import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateClassMemberDto {
  @ApiProperty()
  @IsInt({ message: 'Student ID must be an integer' })
  @IsNotEmpty({ message: 'Student ID is required' })
  student_Id: number;

  @ApiProperty()
  @IsInt({ message: 'Class ID must be an integer' })
  @IsNotEmpty({ message: 'Class ID is required' })
  class_Id: number;
}
