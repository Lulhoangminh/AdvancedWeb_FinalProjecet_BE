import { Test, TestingModule } from '@nestjs/testing';
import { GradeCompositionsService } from './grade_compositions.service';

describe('GradeCompositionsService', () => {
  let service: GradeCompositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradeCompositionsService],
    }).compile();

    service = module.get<GradeCompositionsService>(GradeCompositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
