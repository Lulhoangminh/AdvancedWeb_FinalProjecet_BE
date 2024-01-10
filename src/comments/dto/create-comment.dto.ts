import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsString, IsISO8601 } from 'class-validator';
import { Comment } from '@prisma/client';

export class CreateCommentDto {
  @ApiProperty()
  @IsString({ message: 'grade_review_id must be an string' })
  @IsNotEmpty({ message: 'grade_review_id is required' })
  grade_review_id: string;

  @ApiProperty()
  @IsString({ message: 'user_id must be an string' })
  @IsNotEmpty({ message: 'user_id is required' })
  user_id: string;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for created_at' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsISO8601({ strict: true }, { message: 'Invalid date format for updated_at' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsString({ message: 'comment must be a string' })
  @IsNotEmpty({ message: 'comment is required' })
  comment: string;
}
