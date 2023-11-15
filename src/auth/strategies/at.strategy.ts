import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

type JwtPayLoad = {
    sub: string;
    email: string;
}

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // ingnoreExpiration: false,
            secretOrKey: process.env.SECRET_ACCESS
        })
    }

    validate(payload: JwtPayLoad){
        return payload;
    }
}