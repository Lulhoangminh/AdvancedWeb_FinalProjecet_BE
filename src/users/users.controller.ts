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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UpdateUseEmailDto } from './dto/update-user-email.dto';
import { Public } from 'src/common/decorators';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Public()
@Controller('users')
@ApiTags('users')
@UseFilters(PrismaClientExceptionFilter)
export class UsersController {
  constructor(private readonly Users: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.Users.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.Users.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.Users.findOne(id);
    if (!user) {
      throw new NotFoundException(`Could not find user with id: ${id}.`);
    }
    return user;
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.Users.update(id, updateUserDto);
  }

  @Patch(':id/email')
  @ApiOkResponse({ type: UserEntity })
  updateEmail(@Param('id', ParseIntPipe) id: number, @Body() updateUserEmail: UpdateUseEmailDto) {
    const { email } = updateUserEmail;
    return this.Users.updateEmail(id, email);
  }

  @Patch(':id/password')
  @ApiOkResponse({ type: UserEntity })
  updatePassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserPassword: UpdateUserPasswordDto,
  ) {
    const { password } = updateUserPassword;
    return this.Users.updatePassword(id, password);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.Users.remove(id);
  }
}
