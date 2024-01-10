import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsISO8601, IsString } from 'class-validator';

export class CreateAdminDto {
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
