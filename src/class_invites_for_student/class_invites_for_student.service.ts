import { Injectable } from '@nestjs/common';
import { CreateClassInvitesForStudentDto } from './dto/create-class_invites_for_student.dto';
import { UpdateClassInvitesForStudentDto } from './dto/update-class_invites_for_student.dto';

@Injectable()
export class ClassInvitesForStudentService {
  create(createClassInvitesForStudentDto: CreateClassInvitesForStudentDto) {
    return 'This action adds a new classInvitesForStudent';
  }

  findAll() {
    return `This action returns all classInvitesForStudent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classInvitesForStudent`;
  }

  update(id: number, updateClassInvitesForStudentDto: UpdateClassInvitesForStudentDto) {
    return `This action updates a #${id} classInvitesForStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} classInvitesForStudent`;
  }
}
