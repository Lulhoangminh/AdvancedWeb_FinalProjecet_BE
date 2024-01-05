import { PartialType } from '@nestjs/swagger';
import { CreateClassMemberDto } from './create-class_member.dto';

export class UpdateClassMemberDto extends PartialType(CreateClassMemberDto) {}
