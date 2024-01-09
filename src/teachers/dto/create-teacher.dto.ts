import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsISO8601, IsInt, IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
  @ApiProperty()
  @IsInt({ message: 'User ID must be an integer' })
  @IsNotEmpty({ message: 'User ID is required' })
  user_id: number;

  @ApiProperty()
  @IsInt({ message: 'Teacher ID must be an integer' })
  @IsNotEmpty({ message: 'Teacher ID is required' })
  teacher_id: number;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for updated_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;
}
