import { registerEnumType } from "@nestjs/graphql";

export enum PersonaTipo {
    CLIENTE = 'CLIENTE',
    PROVEEDOR = 'PROVEEDOR',
    EMPLEADO = 'EMPLEADO'
}

registerEnumType(
    PersonaTipo,
    {
        name: 'PersonaTipo',
        description: 'Tipos de persona permitidos.'
    }
)