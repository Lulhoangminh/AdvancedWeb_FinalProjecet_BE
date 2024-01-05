import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassMembersService } from './class_members.service';
import { CreateClassMemberDto } from './dto/create-class_member.dto';
import { UpdateClassMemberDto } from './dto/update-class_member.dto';

@Controller('class-members')
export class ClassMembersController {
  constructor(private readonly classMembersService: ClassMembersService) {}

  @Post()
  create(@Body() createClassMemberDto: CreateClassMemberDto) {
    return this.classMembersService.create(createClassMemberDto);
  }

  @Get()
  findAll() {
    return this.classMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassMemberDto: UpdateClassMemberDto) {
    return this.classMembersService.update(+id, updateClassMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classMembersService.remove(+id);
  }
}
