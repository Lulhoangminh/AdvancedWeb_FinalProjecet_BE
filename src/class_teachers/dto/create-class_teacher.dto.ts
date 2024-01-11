import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateClassTeacherDto {
  @ApiProperty()
  @IsString({ message: 'Teacher ID must be an string' })
  @IsNotEmpty({ message: 'Teacher ID is required' })
  teacher_id: string;

  @ApiProperty()
  @IsString({ message: 'Class ID must be an string' })
  @IsNotEmpty({ message: 'Class ID is required' })
  class_id: string;

  @ApiProperty({ default: false })
  @IsNotEmpty({ message: 'isOwner is required' })
  isOwner: boolean;
}
