import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  findAll() {
    return this.prisma.student.findMany({ where: {} });
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({
      where: {
        user_id: id,
      },
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: {
        user_id: id,
      },
      data: updateStudentDto,
    });
  }

  remove(id: number) {
    return this.prisma.student.delete({
      where: {
        user_id: id,
      },
    });
  }
}
