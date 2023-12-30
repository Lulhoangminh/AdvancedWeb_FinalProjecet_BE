import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Tokens } from './types';
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthGuard } from 'src/common/guards/google.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private AuthService: AuthService,
    private UsersService: UsersService,
  ) {}

  @Get('profileUser')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  getProfileUser(@GetCurrentUserId() userId: number) {
    // console.log('user', userId);
    return this.UsersService.findOne(userId);
  }

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.AuthService.signupLocal(dto);
  }

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.AuthService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  logout(@GetCurrentUserId() userId: number) {
    console.log('userId', userId);
    return this.AuthService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.AuthService.refreshTokens(userId, refreshToken);
  }

  @Public()
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'login ok' };
  }

  @Public()
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'redirect ok' };
  }

  @Public()
  @Get('status')
  user(@Req() req) {
    console.log(req.user);
    if (req.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
    // return req.user;
  }

  // @Get('confirm')
  // async confirmUser(@Query('code') code: string) {
  //   const user = await

  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   // Mark the user as confirmed in the database
  //   await this.userService.confirmUser(user.id);

  //   return 'User confirmed successfully';
  // }
}
