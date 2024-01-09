import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export default class CreateClassDto {
  @ApiProperty()
  @IsNumber({}, { message: 'Class ID must be a number' })
  @IsNotEmpty({ message: 'Class ID is required' })
  class_id: number;

  @ApiProperty()
  // @IsDate({ message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  // @IsDate({ message: 'Invalid date format for updated_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsString({ message: 'Invite code must be a string' })
  @IsNotEmpty({ message: 'Invite code is required' })
  invite_code: string;

  @ApiProperty()
  @IsString({ message: 'Invite link must be a string' })
  @IsNotEmpty({ message: 'Invite link is required' })
  invite_link: string;

  @ApiProperty()
  @IsString({ message: 'Class name must be a string' })
  @IsNotEmpty({ message: 'Class name is required' })
  class_name: string;

  @ApiProperty()
  @IsString({ message: 'Status must be a string' })
  @IsNotEmpty({ message: 'Status is required' })
  status: string;

  @ApiProperty()
  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
