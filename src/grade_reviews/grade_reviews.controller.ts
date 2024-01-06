import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GradeReviewsService } from './grade_reviews.service';
import { CreateGradeReviewDto } from './dto/create-grade_review.dto';
import { UpdateGradeReviewDto } from './dto/update-grade_review.dto';

@Controller('grade-reviews')
export class GradeReviewsController {
  constructor(private readonly gradeReviewsService: GradeReviewsService) {}

  @Post()
  create(@Body() createGradeReviewDto: CreateGradeReviewDto) {
    return this.gradeReviewsService.create(createGradeReviewDto);
  }

  @Get()
  findAll() {
    return this.gradeReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gradeReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGradeReviewDto: UpdateGradeReviewDto) {
    return this.gradeReviewsService.update(+id, updateGradeReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gradeReviewsService.remove(+id);
  }
}
