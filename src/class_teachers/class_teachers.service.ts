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

  async find(class_id?: string, teacher_id?: string) {
    if (class_id && teacher_id) {
      return this.prisma.classTeacher.findUnique({
        where: {
          teacher_id_class_id: {
            class_id,
            teacher_id,
          },
        },
      });
    } else if (class_id) {
      return this.prisma.classTeacher.findMany({
        where: {
          class_id: class_id,
        },
      });
    } else if (teacher_id) {
      return this.prisma.classTeacher.findMany({
        where: {
          teacher_id: teacher_id,
        },
      });
    } else {
      throw new Error('Provide at least one of class_id or teacher_id');
    }
  }

  update(class_id: string, teacher_id: string, updateClassTeacherDto: UpdateClassTeacherDto) {
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

  remove(class_id: string, teacher_id: string) {
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
