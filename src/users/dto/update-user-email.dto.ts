import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UpdateUseEmailDto {
    @IsString()
    @ApiProperty({required:true})
    @IsEmail()
    email: string;
}
