import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log('Serializer User');
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.usersService.findOne(payload.id);
    console.log('Deserializer User');
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}
