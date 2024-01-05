import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService],
  imports: [PrismaModule],
})
export class ClassesModule {}
