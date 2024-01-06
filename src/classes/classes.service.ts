import { Injectable } from '@nestjs/common';
import CreateClassDto from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  create(createClassDto: CreateClassDto) {
    return this.prisma.class.create({
      data: createClassDto,
    });
  }

  findAll() {
    return this.prisma.class.findMany({
      where: {},
    });
  }

  findOne(id: number) {
    return this.prisma.class.findUnique({
      where: {
        class_id: id,
      },
    });
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.prisma.class.update({
      where: {
        class_id: id,
      },
      data: updateClassDto,
    });
  }

  remove(id: number) {
    return this.prisma.class.delete({
      where: {
        class_id: id,
      },
    });
  }

  async getClassesByUserId(userId: number) {
    return this.prisma.classMember.findMany({
      where: {
        student_id: userId,
      },
      include: {
        class: true,
      },
    });
  }
}
