import { Test, TestingModule } from '@nestjs/testing';
import { ClassMembersService } from './class_members.service';

describe('ClassMembersService', () => {
  let service: ClassMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassMembersService],
    }).compile();

    service = module.get<ClassMembersService>(ClassMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
