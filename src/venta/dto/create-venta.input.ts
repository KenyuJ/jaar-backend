import { Field, ID, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsEnum, IsIn, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateDetalleVentaInput } from "src/detalle_venta/dto/create-detalle_venta.input";
import { VentaTipoPago } from "src/common/enums/venta/venta-tipo-pago.enum";

@InputType()
export class CreateVentaInput  {

    @Field( () => VentaTipoPago)
    @IsString()
    @MinLength(1)
    @IsEnum(VentaTipoPago)
    ven_tipo_pago : string

    @Field( () => ID )
    @IsString()
    @MinLength(1)
    usu_id : string

    @Field( () => [CreateDetalleVentaInput] )
    @Type( () => CreateDetalleVentaInput )
    @ValidateNested()
    detalle_venta : CreateDetalleVentaInput[]

}