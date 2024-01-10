import { Injectable } from '@nestjs/common';
import { CreateGradeCompositionDto } from './dto/create-grade_composition.dto';
import { UpdateGradeCompositionDto } from './dto/update-grade_composition.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGradeCompositionIsFinalized } from './dto/update-grade_composition-isfinalized.dto';

@Injectable()
export class GradeCompositionsService {
  constructor(private prisma: PrismaService) {}

  create(createGradeCompositionDto: CreateGradeCompositionDto) {
    return this.prisma.gradeComposition.create({
      data: createGradeCompositionDto,
    });
  }

  findAll() {
    return this.prisma.gradeComposition.findMany({
      where: {},
    });
  }

  findOne(id: string) {
    return this.prisma.gradeComposition.findUnique({
      where: {
        grade_composition_id: id,
      },
    });
  }

  update(id: string, updateGradeCompositionDto: UpdateGradeCompositionDto) {
    return this.prisma.gradeComposition.update({
      where: {
        grade_composition_id: id,
      },
      data: updateGradeCompositionDto,
    });
  }

  remove(id: string) {
    return this.prisma.gradeComposition.delete({
      where: {
        grade_composition_id: id,
      },
    });
  }

  finalizeGradeComposition(
    id: string,
    updateGradeCompositionIsFinalized: UpdateGradeCompositionIsFinalized,
  ) {
    return this.prisma.gradeComposition.update({
      where: {
        grade_composition_id: id,
      },
      data: updateGradeCompositionIsFinalized,
    });
  }
}
