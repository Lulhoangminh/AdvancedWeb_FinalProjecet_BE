import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate, IsISO8601 } from 'class-validator';
import { ClassInviteForStudent } from '@prisma/client';

export class CreateClassInvitesForStudentDto {
  @ApiProperty()
  @IsString({ message: 'student_id must be an string' })
  @IsNotEmpty({ message: 'student_id is required' })
  student_id: string;

  @ApiProperty()
  @IsString({ message: 'class_id must be an string' })
  @IsNotEmpty({ message: 'class_id is required' })
  class_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for invited_time' })
  @IsNotEmpty({ message: 'invited_time is required' })
  invited_time: Date;
}
