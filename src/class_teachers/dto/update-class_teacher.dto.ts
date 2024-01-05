import { PartialType } from '@nestjs/swagger';
import { CreateClassTeacherDto } from './create-class_teacher.dto';

export class UpdateClassTeacherDto extends PartialType(CreateClassTeacherDto) {}
