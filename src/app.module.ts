import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
// import { SuthModule } from './suth/suth.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { PassportModule } from '@nestjs/passport';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { AdminsModule } from './admins/admins.module';
import { ClassesModule } from './classes/classes.module';
import { ClassTeachersModule } from './class_teachers/class_teachers.module';
import { ClassMembersModule } from './class_members/class_members.module';
import { ClassInvitesForTeacherModule } from './class_invites_for_teacher/class_invites_for_teacher.module';
import { ClassInvitesForStudentModule } from './class_invites_for_student/class_invites_for_student.module';
import { GradeCompositionsModule } from './grade_compositions/grade_compositions.module';
import { StudentGradesModule } from './student_grades/student_grades.module';
import { GradeReviewsModule } from './grade_reviews/grade_reviews.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    JwtModule,
    PassportModule.register({ session: true }),
    TeachersModule,
    StudentsModule,
    AdminsModule,
    ClassesModule,
    ClassTeachersModule,
    ClassMembersModule,
    ClassInvitesForTeacherModule,
    ClassInvitesForStudentModule,
    GradeCompositionsModule,
    StudentGradesModule,
    GradeReviewsModule,
    CommentsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
