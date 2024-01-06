import { Module } from '@nestjs/common';
import { ClassInvitesForTeacherService } from './class_invites_for_teacher.service';
import { ClassInvitesForTeacherController } from './class_invites_for_teacher.controller';

@Module({
  controllers: [ClassInvitesForTeacherController],
  providers: [ClassInvitesForTeacherService],
})
export class ClassInvitesForTeacherModule {}
