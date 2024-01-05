import { Injectable } from '@nestjs/common';
import { CreateClassTeacherDto } from './dto/create-class_teacher.dto';
import { UpdateClassTeacherDto } from './dto/update-class_teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassTeachersService {
  constructor(private prisma: PrismaService) {}

  create(createClassTeacherDto: CreateClassTeacherDto) {
    return this.prisma.classTeacher.create({
      data: createClassTeacherDto,
    });
  }

  findAll() {
    return this.prisma.classTeacher.findMany({
      where: {},
    });
  }

  findOne(class_id: number, teacher_id) {
    return this.prisma.classTeacher.findUnique({
      where: {
        teacher_id_class_id: {
          class_id,
          teacher_id,
        },
      },
    });
  }

  update(class_id: number, teacher_id: number, updateClassTeacherDto: UpdateClassTeacherDto) {
    return this.prisma.classTeacher.update({
      where: {
        teacher_id_class_id: {
          class_id: class_id,
          teacher_id: teacher_id,
        },
      },
      data: updateClassTeacherDto,
    });
  }

  remove(class_id: number, teacher_id: number) {
    return this.prisma.classTeacher.delete({
      where: {
        teacher_id_class_id: {
          class_id: class_id,
          teacher_id: teacher_id,
        },
      },
    });
  }
}
