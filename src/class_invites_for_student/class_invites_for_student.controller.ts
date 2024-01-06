import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassInvitesForStudentService } from './class_invites_for_student.service';
import { CreateClassInvitesForStudentDto } from './dto/create-class_invites_for_student.dto';
import { UpdateClassInvitesForStudentDto } from './dto/update-class_invites_for_student.dto';

@Controller('class-invites-for-student')
export class ClassInvitesForStudentController {
  constructor(private readonly classInvitesForStudentService: ClassInvitesForStudentService) {}

  @Post()
  create(@Body() createClassInvitesForStudentDto: CreateClassInvitesForStudentDto) {
    return this.classInvitesForStudentService.create(createClassInvitesForStudentDto);
  }

  @Get()
  findAll() {
    return this.classInvitesForStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classInvitesForStudentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassInvitesForStudentDto: UpdateClassInvitesForStudentDto) {
    return this.classInvitesForStudentService.update(+id, updateClassInvitesForStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classInvitesForStudentService.remove(+id);
  }
}
