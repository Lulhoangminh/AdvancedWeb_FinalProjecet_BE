import { Test, TestingModule } from '@nestjs/testing';
import { ClassInvitesForTeacherController } from './class_invites_for_teacher.controller';
import { ClassInvitesForTeacherService } from './class_invites_for_teacher.service';

describe('ClassInvitesForTeacherController', () => {
  let controller: ClassInvitesForTeacherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassInvitesForTeacherController],
      providers: [ClassInvitesForTeacherService],
    }).compile();

    controller = module.get<ClassInvitesForTeacherController>(ClassInvitesForTeacherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
