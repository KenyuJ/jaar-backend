import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class DetallesVenta extends Document {


    @Prop({ unique: true, required: true }) 
    id_detalle_venta : string

    @Prop({required : true})
    id_venta : string

    @Prop({required : true})
    id_producto : string

    @Prop({required : true, type: String})
    talla_producto : string

    @Prop({required : true, type : Number})
    subtotal_detalle_venta : number

    @Prop({required : true, type : Number})
    total_detalle_venta : number

    @Prop({required : true, type : Number})
    cantidad_producto : number

    @Prop({required : true, type : Number})
    precio_producto : number

    @Prop({ required: true, type: Number, default: 1 }) 
    estado_detalle_venta : number
    id_talla : string

    @Prop({ required: true, type: Number }) 
    createdAt : number

    @Prop({ required: true, type: Number}) 
    updatedAt ?: number

}

export const DetallesVentaSchema = SchemaFactory.createForClass(DetallesVenta);

