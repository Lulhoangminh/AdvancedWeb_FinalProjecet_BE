import { Module } from '@nestjs/common';
import { StudentGradesService } from './student_grades.service';
import { StudentGradesController } from './student_grades.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StudentGradesController],
  providers: [StudentGradesService],
  imports: [PrismaModule],
})
export class StudentGradesModule {}
