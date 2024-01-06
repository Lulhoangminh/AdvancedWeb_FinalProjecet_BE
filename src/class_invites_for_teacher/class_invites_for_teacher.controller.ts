import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ClassInvitesForTeacherService } from './class_invites_for_teacher.service';
import { CreateClassInvitesForTeacherDto } from './dto/create-class_invites_for_teacher.dto';
import { UpdateClassInvitesForTeacherDto } from './dto/update-class_invites_for_teacher.dto';
import { Public } from 'src/common/decorators';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClassInviteForTeacherEntity } from './entities/class_invites_for_teacher.entity';

@Controller('class-invites-for-teacher')
@Public()
@ApiTags('class-invites-for-teacher')
@UseFilters(PrismaClientExceptionFilter)
export class ClassInvitesForTeacherController {
  constructor(private readonly classInvitesForTeacherService: ClassInvitesForTeacherService) {}

  @Post()
  @ApiCreatedResponse({ type: ClassInviteForTeacherEntity })
  create(@Body() createClassInvitesForTeacherDto: CreateClassInvitesForTeacherDto) {
    return this.classInvitesForTeacherService.create(createClassInvitesForTeacherDto);
  }

  @Get()
  @ApiOkResponse({ type: ClassInviteForTeacherEntity, isArray: true })
  findAll() {
    return this.classInvitesForTeacherService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ClassInviteForTeacherEntity })
  async findOne(
    @Param('class_id', ParseIntPipe) class_id: number,
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
  ) {
    const invite = await this.classInvitesForTeacherService.findOne(class_id, teacher_id);

    if (!invite) {
      throw new NotFoundException(
        `Invite with class_id ${class_id} and teacher_id ${teacher_id} not found`,
      );
    }

    return invite;
  }

  @Patch(':id')
  @ApiOkResponse({ type: ClassInviteForTeacherEntity })
  update(
    @Param('class_id', ParseIntPipe) class_id: number,
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
    @Body() updateClassInvitesForTeacherDto: UpdateClassInvitesForTeacherDto,
  ) {
    return this.classInvitesForTeacherService.update(
      class_id,
      teacher_id,
      updateClassInvitesForTeacherDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: ClassInviteForTeacherEntity })
  remove(
    @Param('class_id', ParseIntPipe) class_id: number,
    @Param('teacher_id', ParseIntPipe) teacher_id: number,
  ) {
    return this.classInvitesForTeacherService.remove(class_id, teacher_id);
  }
}
