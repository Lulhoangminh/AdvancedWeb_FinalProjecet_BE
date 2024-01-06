import { Module } from '@nestjs/common';
import { GradeCompositionsService } from './grade_compositions.service';
import { GradeCompositionsController } from './grade_compositions.controller';

@Module({
  controllers: [GradeCompositionsController],
  providers: [GradeCompositionsService],
})
export class GradeCompositionsModule {}
