import { registerEnumType } from "@nestjs/graphql";

export enum UsuarioTipo {
    CAJA = 'CAJA',
    ADMINISTRADOR = 'ADMINISTRADOR'
}

registerEnumType(
    UsuarioTipo,
    {
        name: 'UsuarioTipo',
        description: 'Tipos de usuario permitidos.'
    }
)