import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, AuthSignInDto, AuthSignUpDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { UserDetails } from './types/types';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signupLocal(dto: AuthSignUpDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);

    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
        Type: dto.Type,
      },
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refresh_token);
    return tokens;
  }

  // async signupLocal(dto: AuthSignUpDto): Promise<Tokens> {
  //   try {
  //     const hash = await this.hashData(dto.password);

  //     const newUser = await this.prisma.user.create({
  //       data: {
  //         email: dto.email,
  //         hash,
  //         Type: dto.Type,
  //       },
  //     });

  //     const tokens = await this.getTokens(newUser.id, newUser.email);
  //     await this.updateRtHash(newUser.id, tokens.refresh_token);
  //     return tokens;
  //   } catch (error) {
  //     if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
  //       // Unique constraint violation on the 'email' field
  //       throw new ConflictException('Email is already in use');
  //     }
  //     // Handle other errors or rethrow them if needed
  //     throw error;
  //   }
  // }

  async signinLocal(dto: AuthSignInDto): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Access denied no user');
    }

    console.log('user exists');
    const passwordMatches = await bcrypt.compare(dto.password, user.hash);

    if (!passwordMatches) throw new ForbiddenException('Access denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: string) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
  }

  async refreshTokens(userId: string, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user || !user.hashedRt) throw new ForbiddenException('Access denied');

    const rtMatches = await bcrypt.compare(rt, user.hashedRt);
    if (!rtMatches) throw new ForbiddenException('Access denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  async validateUser(details: UserDetails) {
    console.log('AuthService');
    console.log(details);
    const user = await this.prisma.user.findUnique({
      where: {
        email: details.email,
      },
    });
    console.log(user);
    if (user) {
      return user;
    }
    console.log('User not found. Creating new user...');
    const newUser = await this.prisma.user.create({
      data: {
        email: details.email,
        fullname: details.displayName,
      },
    });
    return details;
  }

  // async findUserByConfirmationCode(code: string){
  //   return this.prisma.user.findByConfirmationCode(code);
  // }

  //Util functions

  async updateRtHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.SECRET_ACCESS,
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.SECRET_REFRESH,
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
