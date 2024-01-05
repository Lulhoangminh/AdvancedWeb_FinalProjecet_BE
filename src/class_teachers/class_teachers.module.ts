import { Module } from '@nestjs/common';
import { ClassTeachersService } from './class_teachers.service';
import { ClassTeachersController } from './class_teachers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ClassTeachersController],
  providers: [ClassTeachersService],
  imports: [PrismaModule],
})
export class ClassTeachersModule {}
