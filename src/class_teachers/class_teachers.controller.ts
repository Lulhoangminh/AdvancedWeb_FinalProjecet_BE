import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { ClassTeachersService } from './class_teachers.service';
import { CreateClassTeacherDto } from './dto/create-class_teacher.dto';
import { UpdateClassTeacherDto } from './dto/update-class_teacher.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ClassTeacherEntity } from './entities/class_teacher.entity';

@Controller('class-teachers')
@ApiTags('class-teachers')
@Public()
@UseFilters(PrismaClientExceptionFilter)
export class ClassTeachersController {
  constructor(private readonly classTeachersService: ClassTeachersService) {}

  @Post()
  @ApiCreatedResponse({ type: ClassTeacherEntity })
  create(@Body() createClassTeacherDto: CreateClassTeacherDto) {
    return this.classTeachersService.create(createClassTeacherDto);
  }

  @Get()
  @ApiOkResponse({ type: ClassTeacherEntity, isArray: true })
  findAll() {
    return this.classTeachersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ClassTeacherEntity, isArray: true })
  findOne(
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
  ) {
    const class_teacher = this.classTeachersService.findOne(+teacher_id, +class_id);

    if (!class_teacher) {
      throw new NotFoundException(
        `Class teacher with id ${teacher_id} and class id ${class_id} not found`,
      );
    }

    return class_teacher;
  }

  @Patch(':id')
  @ApiOkResponse({ type: ClassTeacherEntity })
  update(
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
    @Body() updateClassTeacherDto: UpdateClassTeacherDto,
  ) {
    return this.classTeachersService.update(class_id, teacher_id, updateClassTeacherDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ClassTeacherEntity })
  remove(
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
  ) {
    return this.classTeachersService.remove(teacher_id, class_id);
  }
}
