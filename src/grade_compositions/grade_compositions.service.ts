import { Injectable } from '@nestjs/common';
import { CreateGradeCompositionDto } from './dto/create-grade_composition.dto';
import { UpdateGradeCompositionDto } from './dto/update-grade_composition.dto';

@Injectable()
export class GradeCompositionsService {
  create(createGradeCompositionDto: CreateGradeCompositionDto) {
    return 'This action adds a new gradeComposition';
  }

  findAll() {
    return `This action returns all gradeCompositions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gradeComposition`;
  }

  update(id: number, updateGradeCompositionDto: UpdateGradeCompositionDto) {
    return `This action updates a #${id} gradeComposition`;
  }

  remove(id: number) {
    return `This action removes a #${id} gradeComposition`;
  }
}
