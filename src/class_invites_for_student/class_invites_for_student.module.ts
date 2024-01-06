import { Module } from '@nestjs/common';
import { ClassInvitesForStudentService } from './class_invites_for_student.service';
import { ClassInvitesForStudentController } from './class_invites_for_student.controller';

@Module({
  controllers: [ClassInvitesForStudentController],
  providers: [ClassInvitesForStudentService],
})
export class ClassInvitesForStudentModule {}
