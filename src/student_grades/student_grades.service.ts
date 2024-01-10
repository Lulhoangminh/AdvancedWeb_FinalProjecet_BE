import { Injectable } from '@nestjs/common';
import { CreateStudentGradeDto } from './dto/create-student_grade.dto';
import { UpdateStudentGradeDto } from './dto/update-student_grade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentGradesService {
  constructor(private prisma: PrismaService) {}

  create(createStudentGradeDto: CreateStudentGradeDto) {
    return this.prisma.studentGrade.create({
      data: createStudentGradeDto,
    });
  }

  findAll() {
    return this.prisma.studentGrade.findMany({
      where: {},
    });
  }

  findOne(student_grade_id: string) {
    return this.prisma.studentGrade.findUnique({
      where: {
        student_grade_id,
      },
    });
  }

  update(student_grade_id: string, updateStudentGradeDto: UpdateStudentGradeDto) {
    return this.prisma.studentGrade.update({
      where: {
        student_grade_id,
      },
      data: updateStudentGradeDto,
    });
  }

  remove(student_grade_id: string) {
    return this.prisma.studentGrade.delete({
      where: {
        student_grade_id,
      },
    });
  }
}
