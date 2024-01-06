import { Test, TestingModule } from '@nestjs/testing';
import { GradeReviewsController } from './grade_reviews.controller';
import { GradeReviewsService } from './grade_reviews.service';

describe('GradeReviewsController', () => {
  let controller: GradeReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradeReviewsController],
      providers: [GradeReviewsService],
    }).compile();

    controller = module.get<GradeReviewsController>(GradeReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
