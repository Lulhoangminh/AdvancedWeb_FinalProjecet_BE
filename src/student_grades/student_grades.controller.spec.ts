import { Test, TestingModule } from '@nestjs/testing';
import { StudentGradesController } from './student_grades.controller';
import { StudentGradesService } from './student_grades.service';

describe('StudentGradesController', () => {
  let controller: StudentGradesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentGradesController],
      providers: [StudentGradesService],
    }).compile();

    controller = module.get<StudentGradesController>(StudentGradesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
