import { Injectable } from '@nestjs/common';
import { CreateGradeReviewDto } from './dto/create-grade_review.dto';
import { UpdateGradeReviewDto } from './dto/update-grade_review.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GradeReviewsService {
  constructor(private prisma: PrismaService) {}

  create(createGradeReviewDto: CreateGradeReviewDto) {
    return this.prisma.gradeReview.create({
      data: createGradeReviewDto,
    });
  }

  findAll() {
    return this.prisma.gradeReview.findMany({
      where: {},
    });
  }

  findOne(id: string) {
    return this.prisma.gradeReview.findUnique({
      where: {
        grade_review_id: id,
      },
    });
  }

  update(id: string, updateGradeReviewDto: UpdateGradeReviewDto) {
    return this.prisma.gradeReview.update({
      where: {
        grade_review_id: id,
      },
      data: updateGradeReviewDto,
    });
  }

  remove(id: string) {
    return this.prisma.gradeReview.delete({
      where: {
        grade_review_id: id,
      },
    });
  }
}
