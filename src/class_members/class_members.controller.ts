import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { ClassMembersService } from './class_members.service';
import { CreateClassMemberDto } from './dto/create-class_member.dto';
import { UpdateClassMemberDto } from './dto/update-class_member.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ClassMemberEntity } from './entities/class_member.entity';

@Controller('class-members')
@ApiTags('class-members')
@Public()
@UseFilters(PrismaClientExceptionFilter)
export class ClassMembersController {
  constructor(private readonly classMembersService: ClassMembersService) {}

  @Post()
  @ApiCreatedResponse({ type: ClassMemberEntity })
  create(@Body() createClassMemberDto: CreateClassMemberDto) {
    return this.classMembersService.create(createClassMemberDto);
  }

  @Get()
  @ApiOkResponse({ type: ClassMemberEntity, isArray: true })
  findAll() {
    return this.classMembersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ClassMemberEntity, isArray: true })
  async findOne(
    @Param('student_id', ParseIntPipe) student_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
  ) {
    const class_member = await this.classMembersService.findOne(class_id, student_id);

    if (!class_member) {
      throw new NotFoundException(
        `Could not find class member with student id ${student_id} and class id ${class_id}`,
      );
    }

    return class_member;
  }

  @Patch(':id')
  @ApiOkResponse({ type: ClassMemberEntity })
  update(
    @Param('student_id', ParseIntPipe) student_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
    @Body() updateClassMemberDto: UpdateClassMemberDto,
  ) {
    return this.classMembersService.update(class_id, student_id, updateClassMemberDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ClassMemberEntity })
  remove(
    @Param('student_id', ParseIntPipe) student_id: number,
    @Param('class_id', ParseIntPipe) class_id: number,
  ) {
    return this.classMembersService.remove(class_id, student_id);
  }
}
