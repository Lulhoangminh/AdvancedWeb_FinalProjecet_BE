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
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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

  @Get()
  @ApiQuery({ name: 'student_id', required: false })
  @ApiQuery({ name: 'class_id', required: false })
  @ApiOkResponse({ type: ClassMemberEntity })
  async findOne(
    @Param('student_id', ParseIntPipe) student_id?: string,
    @Param('class_id', ParseIntPipe) class_id?: string,
  ) {
    const class_member = await this.classMembersService.find(class_id, student_id);

    if (!class_member) {
      throw new NotFoundException(
        `Could not find class member with student id ${student_id} and class id ${class_id}`,
      );
    }

    return class_member;
  }

  @Patch('/update/student_id=:student_id&class_id=:class_id')
  @ApiOkResponse({ type: ClassMemberEntity })
  update(
    @Param('student_id', ParseIntPipe) student_id: string,
    @Param('class_id', ParseIntPipe) class_id: string,
    @Body() updateClassMemberDto: UpdateClassMemberDto,
  ) {
    return this.classMembersService.update(class_id, student_id, updateClassMemberDto);
  }

  @Delete('/remove/student_id=:student_id&class_id=:class_id')
  @ApiOkResponse({ type: ClassMemberEntity })
  remove(
    @Param('student_id', ParseIntPipe) student_id: string,
    @Param('class_id', ParseIntPipe) class_id: string,
  ) {
    return this.classMembersService.remove(class_id, student_id);
  }
}
