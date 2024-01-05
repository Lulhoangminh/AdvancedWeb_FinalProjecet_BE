import { Test, TestingModule } from '@nestjs/testing';
import { ClassMembersController } from './class_members.controller';
import { ClassMembersService } from './class_members.service';

describe('ClassMembersController', () => {
  let controller: ClassMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassMembersController],
      providers: [ClassMembersService],
    }).compile();

    controller = module.get<ClassMembersController>(ClassMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
