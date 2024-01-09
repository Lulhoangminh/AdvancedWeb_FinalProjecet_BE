import { Injectable } from '@nestjs/common';
import { CreateClassInvitesForStudentDto } from './dto/create-class_invites_for_student.dto';
import { UpdateClassInvitesForStudentDto } from './dto/update-class_invites_for_student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassInvitesForStudentService {
  constructor(private prisma: PrismaService) {}

  create(createClassInvitesForStudentDto: CreateClassInvitesForStudentDto) {
    return this.prisma.classInviteForStudent.create({
      data: createClassInvitesForStudentDto,
    });
  }

  findAll() {
    return this.prisma.classInviteForStudent.findMany({
      where: {},
    });
  }

  async find(class_id?: number, student_id?: number) {
    if (class_id && student_id) {
      return this.prisma.classMember.findUnique({
        where: {
          student_id_class_id: {
            class_id,
            student_id,
          },
        },
      });
    } else if (class_id) {
      return this.prisma.classMember.findMany({
        where: {
          class_id: class_id,
        },
      });
    } else if (student_id) {
      return this.prisma.classMember.findMany({
        where: {
          student_id: student_id,
        },
      });
    } else {
      throw new Error('Provide at least one of class_id or teacher_id');
    }
  }

  update(
    class_id: number,
    student_id: number,
    updateClassInvitesForStudentDto: UpdateClassInvitesForStudentDto,
  ) {
    return this.prisma.classInviteForStudent.update({
      where: {
        student_id_class_id: {
          class_id,
          student_id,
        },
      },
      data: updateClassInvitesForStudentDto,
    });
  }

  remove(class_id: number, student_id: number) {
    return this.prisma.classInviteForStudent.delete({
      where: {
        student_id_class_id: {
          class_id,
          student_id,
        },
      },
    });
  }
}
