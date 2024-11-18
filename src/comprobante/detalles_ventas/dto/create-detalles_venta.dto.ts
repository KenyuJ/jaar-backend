import { IsNumber, IsPositive, IsString, MinLength } from "class-validator"

export class CreateDetallesVentaDto {
    
    @IsString()
    @MinLength(1)
    id_venta : string

    @IsString()
    @MinLength(1)
    id_producto : string

    @IsString()
    @MinLength(1)
    talla_producto : string

    @IsNumber()
    @IsPositive()
    subtotal_detalle_venta : number

    @IsNumber()
    @IsPositive()
    total_detalle_venta : number

    @IsNumber()
    @IsPositive()
    cantidad_producto : number

    @IsNumber()
    @IsPositive()
    precio_producto : number

@IsNumber()
    estado_detalle_venta : number

    @IsString()
    @MinLength(1)
    id_talla : string

   @IsNumber()
    createdAt : number

}
