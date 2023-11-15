import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
    IsPhoneNumber
  } from 'class-validator';
  


export class CreateUserDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    createdAt: Date;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    hash: string;
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    hashedRt: string;

    // id          
    // phone_number
    // createdAt   
    // username    
    // email       
    // hash        
    // hashedRt    
}

