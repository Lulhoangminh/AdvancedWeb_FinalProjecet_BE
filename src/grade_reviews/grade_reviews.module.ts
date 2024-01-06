import { Module } from '@nestjs/common';
import { GradeReviewsService } from './grade_reviews.service';
import { GradeReviewsController } from './grade_reviews.controller';

@Module({
  controllers: [GradeReviewsController],
  providers: [GradeReviewsService],
})
export class GradeReviewsModule {}
