import { Injectable } from '@nestjs/common';
import { CreateClassInvitesForTeacherDto } from './dto/create-class_invites_for_teacher.dto';
import { UpdateClassInvitesForTeacherDto } from './dto/update-class_invites_for_teacher.dto';

@Injectable()
export class ClassInvitesForTeacherService {
  create(createClassInvitesForTeacherDto: CreateClassInvitesForTeacherDto) {
    return 'This action adds a new classInvitesForTeacher';
  }

  findAll() {
    return `This action returns all classInvitesForTeacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classInvitesForTeacher`;
  }

  update(id: number, updateClassInvitesForTeacherDto: UpdateClassInvitesForTeacherDto) {
    return `This action updates a #${id} classInvitesForTeacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} classInvitesForTeacher`;
  }
}
