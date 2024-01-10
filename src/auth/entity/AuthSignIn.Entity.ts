import { ApiProperty } from '@nestjs/swagger';
import { ClassInviteForStudent } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class AuthSignInEntity {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
