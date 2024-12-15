import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginInput } from './dto/login.input';
import { AuthResponse } from './types/auth-response.type';
import { JwtService } from '@nestjs/jwt';
import * as  bcrypt from 'bcrypt'
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class AuthService {

    constructor(
        private readonly usuarioService : UsuarioService,
        private readonly jwtService : JwtService,
    ){}

    async login(loginInput : LoginInput) : Promise<AuthResponse>
    {
        const { username, password } = loginInput

        const usuario = await this.usuarioService.findOneByUsername(username)

        if(!usuario) throw new BadRequestException(`EL usuario o la clave es incorrecta.`)

        if ( !bcrypt.compareSync(password, usuario.usu_clave ) ) throw new BadRequestException(`EL usuario o la clave es incorrecta.`)

        const token = this.jwtService.sign({ id: usuario._id })

        return { token, usuario }
    }

    async validateUser(id : string) : Promise<Usuario>
    {
        const usuario = await this.usuarioService.findOne(id)

        if( !usuario.usu_estado ) throw new UnauthorizedException(`El usuario esta inactivo.`)

        return usuario;
    }

    revalidateToken(usuario : Usuario) : AuthResponse
    {
        const token = this.jwtService.sign({ id: usuario._id })

        return { token, usuario }
    }

}