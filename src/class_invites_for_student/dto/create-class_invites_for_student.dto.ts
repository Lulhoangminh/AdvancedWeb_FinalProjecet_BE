import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsISO8601 } from 'class-validator';
import { ClassInviteForStudent } from '@prisma/client';

export class CreateClassInvitesForStudentDto implements ClassInviteForStudent {
  @ApiProperty()
  @IsInt({ message: 'student_id must be an integer' })
  @IsNotEmpty({ message: 'student_id is required' })
  student_id: number;

  @ApiProperty()
  @IsInt({ message: 'class_id must be an integer' })
  @IsNotEmpty({ message: 'class_id is required' })
  class_id: number;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for invited_time' })
  @IsNotEmpty({ message: 'invited_time is required' })
  invited_time: Date;
}
