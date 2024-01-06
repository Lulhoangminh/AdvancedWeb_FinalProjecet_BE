import { Injectable } from '@nestjs/common';
import { CreateGradeReviewDto } from './dto/create-grade_review.dto';
import { UpdateGradeReviewDto } from './dto/update-grade_review.dto';

@Injectable()
export class GradeReviewsService {
  create(createGradeReviewDto: CreateGradeReviewDto) {
    return 'This action adds a new gradeReview';
  }

  findAll() {
    return `This action returns all gradeReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gradeReview`;
  }

  update(id: number, updateGradeReviewDto: UpdateGradeReviewDto) {
    return `This action updates a #${id} gradeReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} gradeReview`;
  }
}
