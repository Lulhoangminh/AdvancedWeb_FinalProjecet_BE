import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.prisma.teacher.create({
      data: createTeacherDto,
    });
  }

  findAll() {
    return this.prisma.teacher.findMany({ where: {} });
  }

  async findOne(teacher_id: string) {
    const teacher = this.prisma.teacher.findUnique({
      where: {
        teacher_id,
      },
    });
    return teacher;
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.prisma.teacher.update({
      where: {
        user_id: id,
      },
      data: updateTeacherDto,
    });
  }

  remove(id: string) {
    return this.prisma.teacher.delete({
      where: {
        user_id: id,
      },
    });
  }
}
