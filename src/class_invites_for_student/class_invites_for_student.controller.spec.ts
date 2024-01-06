import { Test, TestingModule } from '@nestjs/testing';
import { ClassInvitesForStudentController } from './class_invites_for_student.controller';
import { ClassInvitesForStudentService } from './class_invites_for_student.service';

describe('ClassInvitesForStudentController', () => {
  let controller: ClassInvitesForStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassInvitesForStudentController],
      providers: [ClassInvitesForStudentService],
    }).compile();

    controller = module.get<ClassInvitesForStudentController>(ClassInvitesForStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
