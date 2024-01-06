import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsString, IsNumber, IsBoolean } from 'class-validator';
import { GradeComposition } from '@prisma/client';

export class CreateGradeCompositionDto implements GradeComposition {
  @ApiProperty()
  @IsInt({ message: 'grade_composition_id must be an integer' })
  @IsNotEmpty({ message: 'grade_composition_id is required' })
  grade_composition_id: number;

  @ApiProperty()
  @IsInt({ message: 'class_id must be an integer' })
  @IsNotEmpty({ message: 'class_id is required' })
  class_id: number;

  @ApiProperty()
  @IsDate({ message: 'created_at must be a valid date' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsDate({ message: 'updated_at must be a valid date' })
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
