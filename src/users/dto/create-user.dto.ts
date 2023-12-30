import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsPhoneNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  updatedAt: Date;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @IsString()
  @ApiProperty()
  fullname: string;

  @IsString()
  @ApiProperty()
  dob: Date;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  hash: string;

  @IsString()
  @ApiProperty()
  hashedRt: string;

  @IsString()
  @ApiProperty()
  Type: string;

  @IsBoolean()
  @ApiProperty()
  isEmailConfirmed: boolean;

  @IsBoolean()
  @ApiProperty()
  IsBanned: boolean;

  @IsBoolean()
  @ApiProperty()
  IsLocked: boolean;

  // id
  // phone_number
  // createdAt
  // username
  // email
  // hash
  // hashedRt
}
