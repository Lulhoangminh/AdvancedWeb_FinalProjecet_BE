import { Module } from '@nestjs/common';
import { GradeReviewsService } from './grade_reviews.service';
import { GradeReviewsController } from './grade_reviews.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GradeReviewsController],
  providers: [GradeReviewsService],
  imports: [PrismaModule],
})
export class GradeReviewsModule {}
