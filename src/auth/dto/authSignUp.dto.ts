import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignUpDto {
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
