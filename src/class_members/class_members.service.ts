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

  findOne(class_id: number, student_id: number) {
    return this.prisma.classMember.findUnique({
      where: {
        student_id_class_id: {
          class_id,
          student_id,
        },
      },
    });
  }

  update(class_id: number, student_id: number, updateClassMemberDto: UpdateClassMemberDto) {
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

  remove(class_id: number, student_id: number) {
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
