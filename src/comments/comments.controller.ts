import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { CommentEntity } from './entities/comment.entity';

@Controller('comments')
@ApiTags('comments')
@Public()
@UseFilters(PrismaClientExceptionFilter)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiCreatedResponse({ type: CommentEntity })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @ApiOkResponse({ type: CommentEntity, isArray: true })
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CommentEntity })
  async findOne(@Param('id', ParseIntPipe) comment_id: number) {
    const comment = await this.commentsService.findOne(comment_id);

    if (!comment) {
      throw new NotFoundException(`Comment with id ${comment_id} not found`);
    }

    return comment;
  }

  @Patch(':id')
  @ApiOkResponse({ type: CommentEntity })
  update(
    @Param('id', ParseIntPipe) comment_id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(comment_id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CommentEntity })
  remove(@Param('id', ParseIntPipe) comment_id: number) {
    return this.commentsService.remove(comment_id);
  }
}
