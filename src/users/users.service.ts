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
      data: createUserDto
    })
  }

  findAll() {
    return this.prisma.user.findMany({ where: { } });
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id } 
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {id},
      data: updateUserDto
    })
  }

  updateEmail(id: number, email: string) {
    return this.prisma.user.update({
      where: {id},
      data: {
        email
      }
    })
  }

  async updatePassword(id: number, new_password: string){
    const hash = await this.hashData(new_password)
    return this.prisma.user.update({
      where: {id},
      data: {
        hash
      }
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {id}
    })
  }

  hashData(data: string){
    return bcrypt.hash(data, 10);
}
}
