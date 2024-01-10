import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsISO8601 } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty()
  @IsInt({ message: 'User ID must be an integer' })
  @IsNotEmpty({ message: 'User ID is required' })
  user_id: string;

  @ApiProperty()
  @IsInt({ message: 'Admin ID must be an integer' })
  @IsNotEmpty({ message: 'Admin ID is required' })
  admin_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for updated_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;
}
