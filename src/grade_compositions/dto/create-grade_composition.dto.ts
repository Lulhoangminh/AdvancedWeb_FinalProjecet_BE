import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsDate,
  IsString,
  IsNumber,
  IsBoolean,
  IsISO8601,
} from 'class-validator';
import { GradeComposition } from '@prisma/client';

export class CreateGradeCompositionDto {
  @ApiProperty()
  @IsString({ message: 'class_id must be an string' })
  @IsNotEmpty({ message: 'class_id is required' })
  class_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for updated_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @ApiProperty()
  @IsNumber({}, { message: 'Percentage must be a number' })
  @IsNotEmpty({ message: 'Percentage is required' })
  Percentage: number;

  @ApiProperty()
  @IsInt({ message: 'Rank must be an integer' })
  @IsNotEmpty({ message: 'Rank is required' })
  Rank: number;

  @ApiProperty()
  @IsBoolean({ message: 'IsFinalized must be a boolean' })
  @IsNotEmpty({ message: 'IsFinalized is required' })
  IsFinalized: boolean;
}
