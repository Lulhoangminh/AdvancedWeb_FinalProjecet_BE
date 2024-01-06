import { PartialType } from '@nestjs/swagger';
import { CreateStudentGradeDto } from './create-student_grade.dto';

export class UpdateStudentGradeDto extends PartialType(CreateStudentGradeDto) {}
