import { registerEnumType } from "@nestjs/graphql";

export enum PersonaGenero {
    MASCULINO = 'MASCULINO',
    FEMENINO = 'FEMENINO',
    OTRO = 'OTRO'
}

registerEnumType(
    PersonaGenero,
    {
        name: 'PersonaGenero',
        description: 'Tipos de generos permitidos para persona.'
    }
)