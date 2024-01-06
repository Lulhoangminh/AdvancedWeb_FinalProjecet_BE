import { PartialType } from '@nestjs/swagger';
import { CreateClassInvitesForStudentDto } from './create-class_invites_for_student.dto';

export class UpdateClassInvitesForStudentDto extends PartialType(CreateClassInvitesForStudentDto) {}
