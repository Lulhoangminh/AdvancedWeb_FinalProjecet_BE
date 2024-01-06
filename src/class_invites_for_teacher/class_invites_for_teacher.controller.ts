import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassInvitesForTeacherService } from './class_invites_for_teacher.service';
import { CreateClassInvitesForTeacherDto } from './dto/create-class_invites_for_teacher.dto';
import { UpdateClassInvitesForTeacherDto } from './dto/update-class_invites_for_teacher.dto';

@Controller('class-invites-for-teacher')
export class ClassInvitesForTeacherController {
  constructor(private readonly classInvitesForTeacherService: ClassInvitesForTeacherService) {}

  @Post()
  create(@Body() createClassInvitesForTeacherDto: CreateClassInvitesForTeacherDto) {
    return this.classInvitesForTeacherService.create(createClassInvitesForTeacherDto);
  }

  @Get()
  findAll() {
    return this.classInvitesForTeacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classInvitesForTeacherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassInvitesForTeacherDto: UpdateClassInvitesForTeacherDto) {
    return this.classInvitesForTeacherService.update(+id, updateClassInvitesForTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classInvitesForTeacherService.remove(+id);
  }
}
