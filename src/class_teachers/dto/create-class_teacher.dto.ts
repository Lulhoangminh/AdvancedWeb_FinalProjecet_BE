import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateClassTeacherDto {
  @ApiProperty()
  @IsInt({ message: 'Teacher ID must be an integer' })
  @IsNotEmpty({ message: 'Teacher ID is required' })
  teacher_id: number;

  @ApiProperty()
  @IsInt({ message: 'Class ID must be an integer' })
  @IsNotEmpty({ message: 'Class ID is required' })
  class_id: number;
}
