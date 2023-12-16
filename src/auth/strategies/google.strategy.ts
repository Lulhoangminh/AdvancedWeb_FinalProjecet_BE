import { PassportStrategy } from '@nestjs/passport';

import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: '576434745134-9jc7lfsjdm6om8suva70b0tefjij1ec8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastname: name.familyName,
      picture: photos[0].value,
    };
    done(null, user);
  }
}
