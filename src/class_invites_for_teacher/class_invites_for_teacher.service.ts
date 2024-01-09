import { Injectable } from '@nestjs/common';
import { CreateClassInvitesForTeacherDto } from './dto/create-class_invites_for_teacher.dto';
import { UpdateClassInvitesForTeacherDto } from './dto/update-class_invites_for_teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassInvitesForTeacherService {
  constructor(private prisma: PrismaService) {}

  create(createClassInvitesForTeacherDto: CreateClassInvitesForTeacherDto) {
    return this.prisma.classInviteForTeacher.create({
      data: createClassInvitesForTeacherDto,
    });
  }

  findAll() {
    return this.prisma.classInviteForTeacher.findMany({
      where: {},
    });
  }

  async find(class_id?: number, teacher_id?: number) {
    if (class_id && teacher_id) {
      return this.prisma.classInviteForTeacher.findUnique({
        where: {
          class_id_teacher_id: {
            class_id,
            teacher_id,
          },
        },
      });
    } else if (class_id) {
      return this.prisma.classInviteForTeacher.findMany({
        where: {
          class_id: class_id,
        },
      });
    } else if (teacher_id) {
      return this.prisma.classInviteForTeacher.findMany({
        where: {
          teacher_id: teacher_id,
        },
      });
    } else {
      throw new Error('Provide at least one of class_id or teacher_id');
    }
  }
  update(
    class_id: number,
    teacher_id: number,
    updateClassInvitesForTeacherDto: UpdateClassInvitesForTeacherDto,
  ) {
    return this.prisma.classInviteForTeacher.update({
      where: {
        class_id_teacher_id: {
          class_id,
          teacher_id,
        },
      },
      data: updateClassInvitesForTeacherDto,
    });
  }

  remove(class_id: number, teacher_id: number) {
    return this.prisma.classInviteForTeacher.delete({
      where: {
        class_id_teacher_id: {
          class_id,
          teacher_id,
        },
      },
    });
  }
}
