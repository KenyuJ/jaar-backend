import { Field, ID, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsIn, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateDetalleVentaInput } from "src/detalle_venta/dto/create-detalle_venta.input";

@InputType()
export class CreateVentaInput  {

    @Field( () => String)
    @IsString()
    @MinLength(1)
    @IsIn(['EFECTIVO', 'CREDITO'])
    ven_tipo_pago : string

    @Field( () => ID, { nullable: true } )
    @IsString()
    @MinLength(1)
    usu_id : string

    @Field( () => [CreateDetalleVentaInput] )
    @Type( () => CreateDetalleVentaInput )
    @ValidateNested()
    detalle_venta : CreateDetalleVentaInput[]

}