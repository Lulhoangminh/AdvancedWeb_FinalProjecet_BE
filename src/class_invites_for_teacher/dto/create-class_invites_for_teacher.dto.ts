import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate } from 'class-validator';
import { ClassInviteForTeacher } from '@prisma/client';

export class CreateClassInvitesForTeacherDto implements ClassInviteForTeacher {
  @ApiProperty()
  @IsInt({ message: 'teacher_id must be an integer' })
  @IsNotEmpty({ message: 'teacher_id is required' })
  teacher_id: number;

  @ApiProperty()
  @IsInt({ message: 'class_id must be an integer' })
  @IsNotEmpty({ message: 'class_id is required' })
  class_id: number;

  @ApiProperty()
  @IsDate({ message: 'invited_time must be a valid date' })
  @IsNotEmpty({ message: 'invited_time is required' })
  invited_time: Date;
}
