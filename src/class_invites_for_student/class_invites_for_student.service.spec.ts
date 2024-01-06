import { Test, TestingModule } from '@nestjs/testing';
import { ClassInvitesForStudentService } from './class_invites_for_student.service';

describe('ClassInvitesForStudentService', () => {
  let service: ClassInvitesForStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassInvitesForStudentService],
    }).compile();

    service = module.get<ClassInvitesForStudentService>(ClassInvitesForStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
