import { Injectable } from '@nestjs/common';
import { CreateStudentGradeDto } from './dto/create-student_grade.dto';
import { UpdateStudentGradeDto } from './dto/update-student_grade.dto';

@Injectable()
export class StudentGradesService {
  create(createStudentGradeDto: CreateStudentGradeDto) {
    return 'This action adds a new studentGrade';
  }

  findAll() {
    return `This action returns all studentGrades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentGrade`;
  }

  update(id: number, updateStudentGradeDto: UpdateStudentGradeDto) {
    return `This action updates a #${id} studentGrade`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentGrade`;
  }
}
