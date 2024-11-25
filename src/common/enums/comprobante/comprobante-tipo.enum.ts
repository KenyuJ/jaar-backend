import { registerEnumType } from "@nestjs/graphql";

export enum ComprobanteTipo {
    BOLETA = 'BOLETA',
    FACTURA = 'FACTURA'
}

registerEnumType(
    ComprobanteTipo,
    {
        name: 'ComprobanteTipo',
        description: 'Tipos de comprobantes permitidos.'
    }
)