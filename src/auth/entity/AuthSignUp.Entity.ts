import { ApiProperty } from '@nestjs/swagger';
import { ClassInviteForStudent } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class AuthSignUpEntity {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  Type: string;
}
