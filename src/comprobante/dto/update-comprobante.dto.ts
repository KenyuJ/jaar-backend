import { IsDate, IsNumber, IsString, MinLength, IsOptional, IsPositive } from "class-validator";

export class UpdateComprobanteDto {
  
    @IsOptional() 
     @IsString()
    @MinLength(1)
    serie_comprobante?: string;

    @IsOptional()
     @IsString()
    @MinLength(1)
    tipo_comprobante?: string;

    @IsOptional()
    @IsDate() // Valida que sea una fecha
    fecha_emision?: Date;

    @IsOptional()
    @IsString()
    @MinLength(1)
    id_usuario?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive() // Monto positivo
    total?: number;

    @IsOptional()
    @IsNumber()
    estado?: number;

    @IsOptional()
    @IsString()
    @MinLength(1)
    id_venta?: string;

    @IsOptional()
    @IsNumber()
    createdAt?: number;

    @IsOptional()
    @IsNumber()
    updatedAt?: number;
}
