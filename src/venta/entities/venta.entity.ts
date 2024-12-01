import { Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { VentaTipoPago } from "src/common/enums/venta/venta-tipo-pago.enum";
import { DetalleVenta } from "src/detalle_venta/entities/detalle_venta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

@ObjectType()
@Schema()
export class Venta extends Document {

    @Field( () => ID, { name: 'ven_id' })
    _id : string

    @Field( () => Date )
    @Prop({ required: true })
    ven_fecha : Date

    @Field( () => Float )
    @Prop({ required: true })
    ven_total : number

    @Field( () => VentaTipoPago )
    @Prop({ required: true, enum: VentaTipoPago })
    ven_tipo_pago : string

    @Field( () => Usuario )
    @Prop({ type: Types.ObjectId, ref: 'Usuario' })
    usuario : string

    @Field( () => [DetalleVenta])
    @Prop({ type: [{ type: Types.ObjectId, ref: 'DetalleVenta' }] })
    detalle_venta : string[]

}

export const ventaSchema = SchemaFactory.createForClass(Venta);