import { Module } from '@nestjs/common';
import { StudentGradesService } from './student_grades.service';
import { StudentGradesController } from './student_grades.controller';

@Module({
  controllers: [StudentGradesController],
  providers: [StudentGradesService],
})
export class StudentGradesModule {}
