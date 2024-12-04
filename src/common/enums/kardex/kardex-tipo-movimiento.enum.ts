import { registerEnumType } from "@nestjs/graphql";

export enum KardexTipoMovimiento {
    ENTRADA = 'ENTRADA',
    SALIDA = 'SALIDA'
}

registerEnumType(
    KardexTipoMovimiento,
    {
        name: 'KardexTipoMovimiento',
        description: 'Tipo de movimientos permitidos para Kardex.'
    }
)