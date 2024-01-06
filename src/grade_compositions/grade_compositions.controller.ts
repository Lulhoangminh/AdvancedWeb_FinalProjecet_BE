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
import { GradeCompositionsService } from './grade_compositions.service';
import { CreateGradeCompositionDto } from './dto/create-grade_composition.dto';
import { UpdateGradeCompositionDto } from './dto/update-grade_composition.dto';
import { Public } from 'src/common/decorators';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { GradeCompositionEntity } from './entities/grade_composition.entity';

@Controller('grade-compositions')
@Public()
@ApiTags('grade-compositions')
@UseFilters(PrismaClientExceptionFilter)
export class GradeCompositionsController {
  constructor(private readonly gradeCompositionsService: GradeCompositionsService) {}

  @Post()
  @ApiCreatedResponse({ type: GradeCompositionEntity })
  create(@Body() createGradeCompositionDto: CreateGradeCompositionDto) {
    return this.gradeCompositionsService.create(createGradeCompositionDto);
  }

  @Get()
  @ApiOkResponse({ type: GradeCompositionEntity, isArray: true })
  findAll() {
    return this.gradeCompositionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GradeCompositionEntity })
  async findOne(@Param('grade_composition_id', ParseIntPipe) grade_composition_id: number) {
    const grade_composition = await this.gradeCompositionsService.findOne(grade_composition_id);

    if (!grade_composition) {
      throw new NotFoundException(`Grade Composition #${grade_composition_id} not found`);
    }

    return grade_composition;
  }

  @Patch(':id')
  @ApiOkResponse({ type: GradeCompositionEntity })
  update(
    @Param('grade_composition_id', ParseIntPipe) grade_composition_id: number,
    @Body() updateGradeCompositionDto: UpdateGradeCompositionDto,
  ) {
    return this.gradeCompositionsService.update(grade_composition_id, updateGradeCompositionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: GradeCompositionEntity })
  remove(@Param('grade_composition_id', ParseIntPipe) grade_composition_id: number) {
    return this.gradeCompositionsService.remove(grade_composition_id);
  }
}
