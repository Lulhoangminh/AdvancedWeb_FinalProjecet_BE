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
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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

  @Get()
  @ApiQuery({ name: 'teacher_id', required: false })
  @ApiQuery({ name: 'class_id', required: false })
  @ApiOkResponse({ type: ClassTeacherEntity })
  async findOne(@Param('teacher_id') teacher_id?: any, @Param('class_id') class_id?: any) {
    // console.log(teacher_id, class_id);
    const class_teacher = await this.classTeachersService.find(teacher_id, class_id);
    // console.log(class_teacher);
    if (!class_teacher) {
      throw new NotFoundException(
        `Class teacher with id ${teacher_id} and class id ${class_id} not found`,
      );
    }
    return class_teacher;
  }

  @Patch('/update/teacher_id=:teacher_id&class_id=:class_id')
  @ApiOkResponse({ type: ClassTeacherEntity })
  update(
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
    @Body() updateClassTeacherDto: UpdateClassTeacherDto,
  ) {
    // console.log(teacher_id, class_id, updateClassTeacherDto);
    return this.classTeachersService.update(class_id, teacher_id, updateClassTeacherDto);
  }

  @Delete('/remove/teacher_id=:teacher_id&class_id=:class_id')
  @ApiOkResponse({ type: ClassTeacherEntity })
  remove(
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
  ) {
    return this.classTeachersService.remove(teacher_id, class_id);
  }
}
