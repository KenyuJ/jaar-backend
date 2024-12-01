import { registerEnumType } from "@nestjs/graphql";

export enum PersonaRol {
    USUARIO = 'USUARIO'
}

registerEnumType(
    PersonaRol,
    {
        name: 'PersonaRol',
        description: 'Roles de persona permitidos'
    }
)