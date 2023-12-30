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
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TeacherEntity } from './entities/teacher.entity';

@Controller('teachers')
@ApiTags('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  @ApiCreatedResponse({ type: TeacherEntity })
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  @ApiOkResponse({ type: TeacherEntity, isArray: true })
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TeacherEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const teacher = await this.teachersService.findOne(+id);
    if (!teacher) {
      throw new NotFoundException(`Could not find teacher with id: ${id}.`);
    }
    return teacher;
  }

  @Patch(':id')
  @ApiOkResponse({ type: TeacherEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TeacherEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teachersService.remove(+id);
  }
}
