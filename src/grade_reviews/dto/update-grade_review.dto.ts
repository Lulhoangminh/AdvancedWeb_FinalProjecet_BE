import { PartialType } from '@nestjs/swagger';
import { CreateGradeReviewDto } from './create-grade_review.dto';

export class UpdateGradeReviewDto extends PartialType(CreateGradeReviewDto) {}
