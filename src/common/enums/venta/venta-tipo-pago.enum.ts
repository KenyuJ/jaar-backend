import { registerEnumType } from "@nestjs/graphql";

export enum VentaTipoPago {
    EFECTIVO = 'EFECTIVO',
    CREDITO = 'CREDITO'
}

registerEnumType(
    VentaTipoPago,
    {
        name: 'VentaTipoPago',
        description: 'Tipos de pago permitidos para venta.'
    }
)