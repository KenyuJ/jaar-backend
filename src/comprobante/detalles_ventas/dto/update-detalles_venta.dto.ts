import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallesVentaDto } from './create-detalles_venta.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDetallesVentaDto extends PartialType(CreateDetallesVentaDto) {

    @IsString()
    @IsOptional()
    id_venta ? : string

    @IsString()
    @IsOptional()
    id_producto ? : string

    @IsString()
    @IsOptional()
    talla_producto ? : string

    @IsNumber()
    @IsOptional()
    subtotal_detalle_venta ? : number

    @IsNumber()
    @IsOptional()
    total_detalle_venta ? : number

    @IsNumber()
    @IsOptional()
    cantidad_producto ? : number

    @IsNumber()
    @IsOptional()
    precio_producto ? : number

    @IsNumber()
    @IsOptional()
    estado_detalle_venta ? : number

    @IsString()
    @IsOptional()
    id_talla ? : string

   @IsNumber()
   @IsOptional()
    createdAt ? : number

    @IsNumber()
    @IsOptional()
    updatedAt ?: number

}
