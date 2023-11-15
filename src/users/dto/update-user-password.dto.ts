import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateUserPasswordDto {
    @IsString()
    @ApiProperty({required:true})
    password: string;
}
