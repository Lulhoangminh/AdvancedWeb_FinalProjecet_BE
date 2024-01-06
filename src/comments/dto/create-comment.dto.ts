import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsString } from 'class-validator';
import { Comment } from '@prisma/client';

export class CreateCommentDto implements Comment {
  @ApiProperty()
  @IsInt({ message: 'comment_id must be an integer' })
  @IsNotEmpty({ message: 'comment_id is required' })
  comment_id: number;

  @ApiProperty()
  @IsInt({ message: 'grade_review_id must be an integer' })
  @IsNotEmpty({ message: 'grade_review_id is required' })
  grade_review_id: number;

  @ApiProperty()
  @IsInt({ message: 'user_id must be an integer' })
  @IsNotEmpty({ message: 'user_id is required' })
  user_id: number;

  @ApiProperty()
  @IsDate({ message: 'created_at must be a valid date' })
  @IsNotEmpty({ message: 'created_at is required' })
  created_at: Date;

  @ApiProperty()
  @IsDate({ message: 'updated_at must be a valid date' })
  @IsNotEmpty({ message: 'updated_at is required' })
  updated_at: Date;

  @ApiProperty()
  @IsString({ message: 'comment must be a string' })
  @IsNotEmpty({ message: 'comment is required' })
  comment: string;
}
