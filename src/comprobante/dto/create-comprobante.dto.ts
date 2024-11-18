import { IsDate, IsNumber, IsString, MinLength, IsOptional, IsPositive } from "class-validator";

export class CreateComprobanteDto {

    @IsString()
    @MinLength(1)
    serie_comprobante: string;

    @IsString()
    @MinLength(1)
    tipo_comprobante: string;

    @IsDate() 
    fecha_emision: Date;

    @IsString()
    @MinLength(1)
    id_usuario: string;

    @IsNumber()
    @IsPositive()
    total: number;

    @IsNumber()
    estado: number;

    @IsString()
    @MinLength(1)
    id_venta: string;

    @IsNumber()
    createdAt: number; 

    
}
