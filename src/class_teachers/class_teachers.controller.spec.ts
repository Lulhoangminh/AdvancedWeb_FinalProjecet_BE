import { Test, TestingModule } from '@nestjs/testing';
import { ClassTeachersController } from './class_teachers.controller';
import { ClassTeachersService } from './class_teachers.service';

describe('ClassTeachersController', () => {
  let controller: ClassTeachersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassTeachersController],
      providers: [ClassTeachersService],
    }).compile();

    controller = module.get<ClassTeachersController>(ClassTeachersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
