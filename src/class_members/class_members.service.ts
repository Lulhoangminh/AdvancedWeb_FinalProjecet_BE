import { Injectable } from '@nestjs/common';
import { CreateClassMemberDto } from './dto/create-class_member.dto';
import { UpdateClassMemberDto } from './dto/update-class_member.dto';

@Injectable()
export class ClassMembersService {
  create(createClassMemberDto: CreateClassMemberDto) {
    return 'This action adds a new classMember';
  }

  findAll() {
    return `This action returns all classMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classMember`;
  }

  update(id: number, updateClassMemberDto: UpdateClassMemberDto) {
    return `This action updates a #${id} classMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} classMember`;
  }
}
