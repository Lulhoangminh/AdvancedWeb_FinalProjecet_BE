import { Test, TestingModule } from '@nestjs/testing';
import { ClassTeachersService } from './class_teachers.service';

describe('ClassTeachersService', () => {
  let service: ClassTeachersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassTeachersService],
    }).compile();

    service = module.get<ClassTeachersService>(ClassTeachersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
