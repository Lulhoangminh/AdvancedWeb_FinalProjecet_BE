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
import { ClassInvitesForStudentService } from './class_invites_for_student.service';
import { CreateClassInvitesForStudentDto } from './dto/create-class_invites_for_student.dto';
import { UpdateClassInvitesForStudentDto } from './dto/update-class_invites_for_student.dto';
import { Public } from 'src/common/decorators';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ClassInvitesForStudentEntity } from './entities/class_invites_for_student.entity';

@Controller('class-invites-for-student')
@Public()
@ApiTags('class-invites-for-student')
@UseFilters(PrismaClientExceptionFilter)
export class ClassInvitesForStudentController {
  constructor(private readonly classInvitesForStudentService: ClassInvitesForStudentService) {}

  @Post()
  @ApiCreatedResponse({ type: ClassInvitesForStudentEntity })
  create(@Body() createClassInvitesForStudentDto: CreateClassInvitesForStudentDto) {
    return this.classInvitesForStudentService.create(createClassInvitesForStudentDto);
  }

  @Get()
  @ApiOkResponse({ type: ClassInvitesForStudentEntity, isArray: true })
  findAll() {
    return this.classInvitesForStudentService.findAll();
  }

  @Get()
  @ApiQuery({ name: 'student_id', required: false })
  @ApiQuery({ name: 'class_id', required: false })
  @ApiOkResponse({ type: ClassInvitesForStudentEntity })
  async findOne(
    @Param('class_id', ParseIntPipe) class_id: string,
    @Param('student_id', ParseIntPipe) student_id: string,
  ) {
    const invite = await this.classInvitesForStudentService.find(class_id, student_id);

    if (!invite) {
      throw new NotFoundException(
        `Invite with class_id ${class_id} and student_id ${student_id} not found`,
      );
    }

    return invite;
  }

  @Patch('/update/student_id=:student_id&class_id=:class_id')
  @ApiOkResponse({ type: ClassInvitesForStudentEntity })
  update(
    @Param('class_id', ParseIntPipe) class_id: string,
    @Param('student_id', ParseIntPipe) student_id: string,
    @Body() updateClassInvitesForStudentDto: UpdateClassInvitesForStudentDto,
  ) {
    return this.classInvitesForStudentService.update(
      class_id,
      student_id,
      updateClassInvitesForStudentDto,
    );
  }

  @Delete('/remove/student_id=:student_id&class_id=:class_id')
  @ApiOkResponse({ type: ClassInvitesForStudentEntity })
  remove(
    @Param('class_id', ParseIntPipe) class_id: string,
    @Param('student_id', ParseIntPipe) student_id: string,
  ) {
    return this.classInvitesForStudentService.remove(class_id, student_id);
  }
}
