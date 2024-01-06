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

  findOne(class_id: number, student_id: number) {
    return this.prisma.classInviteForStudent.findUnique({
      where: {
        student_id_class_id: {
          class_id,
          student_id,
        },
      },
    });
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
