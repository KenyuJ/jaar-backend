import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthResponse } from './types/auth-response.type';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsuarioActual } from './decorators/usuario-actual.decorator';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioTipo } from 'src/common/enums/usuario/usuario-tipo.enum';

@Resolver( () => AuthResponse)
export class AuthResolver {

    constructor(private readonly authService : AuthService){}

    @Mutation( () => AuthResponse)
    async login(@Args('loginInput') loginInput: LoginInput) : Promise<AuthResponse>
    {
        return await this.authService.login(loginInput)
    }

    @Query( () => AuthResponse )
    @UseGuards( JwtAuthGuard )
    revalidateToken( @UsuarioActual( UsuarioTipo.CAJA ) usuario : Usuario ) : AuthResponse
    {
        return this.authService.revalidateToken(usuario)
    }

}
