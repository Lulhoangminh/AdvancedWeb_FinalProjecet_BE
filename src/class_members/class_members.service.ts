import { Injectable } from '@nestjs/common';
import { CreateClassMemberDto } from './dto/create-class_member.dto';
import { UpdateClassMemberDto } from './dto/update-class_member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassMembersService {
  constructor(private prisma: PrismaService) {}

  create(createClassMemberDto: CreateClassMemberDto) {
    return this.prisma.classMember.create({
      data: createClassMemberDto,
    });
  }

  findAll() {
    return this.prisma.classMember.findMany({ where: {} });
  }

  async find(class_id?: string, student_id?: string) {
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

  update(class_id: string, student_id: string, updateClassMemberDto: UpdateClassMemberDto) {
    return this.prisma.classMember.update({
      where: {
        student_id_class_id: {
          class_id,
          student_id,
        },
      },
      data: updateClassMemberDto,
    });
  }

  remove(class_id: string, student_id: string) {
    return this.prisma.classMember.delete({
      where: {
        student_id_class_id: {
          class_id,
          student_id,
        },
      },
    });
  }
}
