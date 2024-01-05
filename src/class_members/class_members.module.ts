import { Module } from '@nestjs/common';
import { ClassMembersService } from './class_members.service';
import { ClassMembersController } from './class_members.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ClassMembersController],
  providers: [ClassMembersService],
  imports: [PrismaModule],
})
export class ClassMembersModule {}
