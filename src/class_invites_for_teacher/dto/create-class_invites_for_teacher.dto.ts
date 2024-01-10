import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate, IsISO8601 } from 'class-validator';
import { ClassInviteForTeacher } from '@prisma/client';

export class CreateClassInvitesForTeacherDto {
  @ApiProperty()
  @IsString({ message: 'teacher_id must be an string' })
  @IsNotEmpty({ message: 'teacher_id is required' })
  teacher_id: string;

  @ApiProperty()
  @IsString({ message: 'class_id must be an string' })
  @IsNotEmpty({ message: 'class_id is required' })
  class_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for invited_time' })
  @IsNotEmpty({ message: 'invited_time is required' })
  invited_time: Date;
}
