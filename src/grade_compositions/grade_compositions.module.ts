import { Module } from '@nestjs/common';
import { GradeCompositionsService } from './grade_compositions.service';
import { GradeCompositionsController } from './grade_compositions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GradeCompositionsController],
  providers: [GradeCompositionsService],
  imports: [PrismaModule],
})
export class GradeCompositionsModule {}
