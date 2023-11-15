import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import {Request} from 'express'
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private AuthService: AuthService
    ) {}

    @Public()
    @Post('local/signup')
    @HttpCode(HttpStatus.CREATED)
    signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
        return this.AuthService.signupLocal(dto)
    }

    @Public()
    @Post('local/signin')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
        return this.AuthService.signinLocal(dto)
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    logout(@GetCurrentUserId()userId: number) {
        return this.AuthService.logout(userId)
    }
    
    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    refreshTokens(
        @GetCurrentUserId() userId: number,
        @GetCurrentUser('refreshToken') refreshToken: string) {
        return this.AuthService.refreshTokens(userId, refreshToken)
    }

}
     


