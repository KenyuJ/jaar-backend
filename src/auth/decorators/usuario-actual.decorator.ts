import { createParamDecorator, ExecutionContext, ForbiddenException, InternalServerErrorException } from "@nestjs/common"
import { GqlExecutionContext } from "@nestjs/graphql"
import { UsuarioTipo } from "src/common/enums/usuario/usuario-tipo.enum"
import { Usuario } from "src/usuario/entities/usuario.entity"

export const UsuarioActual = createParamDecorator( 
    
    ( rol : UsuarioTipo = null, context : ExecutionContext ) => {

        const ctx = GqlExecutionContext.create(context)
        const usuario : Usuario = ctx.getContext().req.user

        if( !usuario ) throw new InternalServerErrorException(`El usuario no ha sido portado por el guard.`)

        if( rol === null ) return usuario

        if( rol.includes(usuario.usu_tipo) ) return usuario 

        throw new ForbiddenException(`El usuario ${ usuario.usu_nombre } necesita el permiso de '${ rol }'. `)

    }
 )