import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import CreateClassDto from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Public } from 'src/common/decorators';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClassEntity } from './entities/class.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('classes')
@Public()
@ApiTags('classes')
@UseFilters(PrismaClientExceptionFilter)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  @ApiCreatedResponse({ type: ClassEntity })
  create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  @ApiOkResponse({ type: ClassEntity, isArray: true })
  findAll() {
    return this.classesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ClassEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const Class = await this.classesService.findOne(id);

    if (!Class) {
      throw new NotFoundException(`Class #${id} not found`);
    }

    return Class;
  }

  @Patch(':id')
  @ApiOkResponse({ type: ClassEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(id, updateClassDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ClassEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.classesService.remove(id);
  }
}
