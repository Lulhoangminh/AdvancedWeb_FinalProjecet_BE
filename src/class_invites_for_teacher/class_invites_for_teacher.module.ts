import { Module } from '@nestjs/common';
import { ClassInvitesForTeacherService } from './class_invites_for_teacher.service';
import { ClassInvitesForTeacherController } from './class_invites_for_teacher.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ClassInvitesForTeacherController],
  providers: [ClassInvitesForTeacherService],
  imports: [PrismaModule],
})
export class ClassInvitesForTeacherModule {}
