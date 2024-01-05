import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
