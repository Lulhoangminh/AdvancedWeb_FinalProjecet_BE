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
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { StudentEntity } from './entities/student.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { Public } from 'src/common/decorators';

@Public()
@Controller('students')
@ApiTags('students')
@UseFilters(PrismaClientExceptionFilter)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiCreatedResponse({ type: StudentEntity })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @ApiCreatedResponse({ type: StudentEntity, isArray: true })
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: StudentEntity })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    const student = await this.studentsService.findOne(id);

    if (!student) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return student;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: StudentEntity })
  update(@Param('id', ParseIntPipe) id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: StudentEntity })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.studentsService.remove(id);
  }
}
