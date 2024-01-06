import { Test, TestingModule } from '@nestjs/testing';
import { GradeReviewsService } from './grade_reviews.service';

describe('GradeReviewsService', () => {
  let service: GradeReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradeReviewsService],
    }).compile();

    service = module.get<GradeReviewsService>(GradeReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
