import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsPhoneNumber,
  IsISO8601,
  IsEmail,
  IsIn,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  // @IsNotEmpty({ message: 'confirmationcode is required' })
  confirmationCode: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for createdAt' })
  @IsNotEmpty({ message: 'createdAt is required' })
  createdAt: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for updatedAt' })
  @IsNotEmpty({ message: 'updatedAt is required' })
  updatedAt: Date;

  @ApiProperty()
  // @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty()
  @IsString()
  // @IsNotEmpty()
  fullname: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for dob' })
  // @IsNotEmpty({ message: 'dob is required' })
  dob: Date;

  @ApiProperty()
  @IsString()
  // @IsNotEmpty()
  hash: string;

  @ApiProperty()
  @IsString()
  // @IsNotEmpty()
  hashedRt: string;

  @ApiProperty()
  @IsString()
  // @IsIn(['admin', 'student', 'teacher'], { message: 'Invalid user type' })
  Type: string;

  @ApiProperty()
  @IsBoolean()
  isEmailConfirmed: boolean;

  @ApiProperty()
  @IsBoolean()
  IsBanned: boolean;

  @ApiProperty()
  @IsBoolean()
  IsLocked: boolean;
}
