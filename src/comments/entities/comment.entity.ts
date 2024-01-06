import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@prisma/client';

export class CommentEntity implements Comment {
  @ApiProperty()
  comment_id: number;
  @ApiProperty()
  grade_review_id: number;
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  comment: string;
}
