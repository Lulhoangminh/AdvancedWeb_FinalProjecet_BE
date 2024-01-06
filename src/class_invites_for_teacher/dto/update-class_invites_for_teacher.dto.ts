import { PartialType } from '@nestjs/swagger';
import { CreateClassInvitesForTeacherDto } from './create-class_invites_for_teacher.dto';

export class UpdateClassInvitesForTeacherDto extends PartialType(CreateClassInvitesForTeacherDto) {}
