import { registerEnumType } from "@nestjs/graphql";

export enum PersonaTipoDocumento {
    DNI = 'DNI',
    RUC = 'RUC'
}

registerEnumType(
    PersonaTipoDocumento,
    {
        name: 'PersonaTipoDocumento',
        description: 'Tipos de documentos permitidos para persona.'
    }
)