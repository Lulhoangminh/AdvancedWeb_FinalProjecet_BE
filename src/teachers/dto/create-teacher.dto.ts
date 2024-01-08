import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty } from 'class-validator';

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
  // @IsDate({ message: 'Invalid created_at date format' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  // @IsDate({ message: 'Invalid updated_at date format' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;
}
