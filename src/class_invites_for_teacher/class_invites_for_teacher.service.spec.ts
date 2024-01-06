import { Test, TestingModule } from '@nestjs/testing';
import { ClassInvitesForTeacherService } from './class_invites_for_teacher.service';

describe('ClassInvitesForTeacherService', () => {
  let service: ClassInvitesForTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassInvitesForTeacherService],
    }).compile();

    service = module.get<ClassInvitesForTeacherService>(ClassInvitesForTeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
