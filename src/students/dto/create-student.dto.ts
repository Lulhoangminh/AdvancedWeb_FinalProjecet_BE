import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty()
  @IsString({ message: 'User ID must be an string' })
  @IsNotEmpty({ message: 'User ID is required' })
  user_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for updated_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;
}
