import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { GradeReviewsService } from './grade_reviews.service';
import { CreateGradeReviewDto } from './dto/create-grade_review.dto';
import { UpdateGradeReviewDto } from './dto/update-grade_review.dto';
import { Public } from 'src/common/decorators';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GradeReviewEntity } from './entities/grade_review.entity';

@Controller('grade-reviews')
@Public()
@ApiTags('grade-reviews')
@UseFilters(PrismaClientExceptionFilter)
export class GradeReviewsController {
  constructor(private readonly gradeReviewsService: GradeReviewsService) {}

  @Post()
  @ApiCreatedResponse({ type: GradeReviewEntity })
  create(@Body() createGradeReviewDto: CreateGradeReviewDto) {
    return this.gradeReviewsService.create(createGradeReviewDto);
  }

  @Get()
  @ApiOkResponse({ type: GradeReviewEntity, isArray: true })
  findAll() {
    return this.gradeReviewsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GradeReviewEntity })
  async findOne(@Param('grade_review_id', ParseIntPipe) grade_review_id: number) {
    const grade_review = await this.gradeReviewsService.findOne(grade_review_id);

    if (!grade_review) {
      throw new NotFoundException(`Grade review #${grade_review_id} not found`);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: GradeReviewEntity })
  update(
    @Param('grade_review_id', ParseIntPipe) grade_review_id: number,
    @Body() updateGradeReviewDto: UpdateGradeReviewDto,
  ) {
    return this.gradeReviewsService.update(grade_review_id, updateGradeReviewDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: GradeReviewEntity })
  remove(@Param('grade_review_id', ParseIntPipe) grade_review_id: number) {
    return this.gradeReviewsService.remove(grade_review_id);
  }
}
