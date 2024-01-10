import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany({ where: {} });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  fidndOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  // findByConfirmationCode(code: string) {
  //   return this.prisma.user.findOne({
  //     where: {
  //       confirmationCode: code,
  //     },
  //   });
  // }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  updateEmail(id: string, email: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email,
      },
    });
  }

  async updatePassword(id: string, new_password: string) {
    const hash = await this.hashData(new_password);
    return this.prisma.user.update({
      where: { id },
      data: {
        hash,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }
}
