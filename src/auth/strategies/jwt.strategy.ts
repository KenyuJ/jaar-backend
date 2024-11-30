import { ConfigService } from "@nestjs/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor( 
        configService : ConfigService,
        private readonly authService : AuthService
    ){

        super({
            secretOrKey : configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })

    }

    async validate(payload : JwtPayload): Promise<Usuario>
    {
        const { id } = payload

        const usuario = await this.authService.validateUser(id)

        return usuario
    }

}