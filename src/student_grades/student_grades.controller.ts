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
} from '@nestjs/common';
import { StudentGradesService } from './student_grades.service';
import { CreateStudentGradeDto } from './dto/create-student_grade.dto';
import { UpdateStudentGradeDto } from './dto/update-student_grade.dto';
import { Public } from 'src/common/decorators';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { StudentGradeEntity } from './entities/student_grade.entity';

@Controller('student-grades')
@Public()
@ApiTags('student-grades')
@UseFilters(PrismaClientExceptionFilter)
export class StudentGradesController {
  constructor(private readonly studentGradesService: StudentGradesService) {}

  @Post()
  @ApiCreatedResponse({ type: StudentGradeEntity })
  create(@Body() createStudentGradeDto: CreateStudentGradeDto) {
    return this.studentGradesService.create(createStudentGradeDto);
  }

  @Get()
  @ApiOkResponse({ type: StudentGradeEntity, isArray: true })
  findAll() {
    return this.studentGradesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: StudentGradeEntity })
  async findOne(@Param('id') id: string) {
    const student_grade = await this.studentGradesService.findOne(+id);

    if (!student_grade) {
      throw new NotFoundException(`Student grade with id ${id} not found`);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: StudentGradeEntity })
  update(@Param('id') id: string, @Body() updateStudentGradeDto: UpdateStudentGradeDto) {
    return this.studentGradesService.update(+id, updateStudentGradeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: StudentGradeEntity })
  remove(@Param('id') id: string) {
    return this.studentGradesService.remove(+id);
  }
}
