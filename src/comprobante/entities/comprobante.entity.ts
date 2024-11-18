import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema() 
export class Comprobante extends Document {
  
    @Prop({ unique: true, required: true }) 
    id_comprobante: string;

    @Prop({ required: true }) 
    serie_comprobante: string;

    @Prop({ required: true }) 
    tipo_comprobante: string;

    @Prop({ required: true, type: Date }) 
    fecha_emision: Date;

    @Prop({ required: true }) 
    id_usuario: string;

    @Prop({ required: true, type: Number}) 
    total: number;

    @Prop({ required: true, type: Number, default: 1 }) 
    estado: number;

    @Prop({ required: true }) 
    id_venta: string;

    @Prop({ required: true, type: Number }) 
    createdAt: number;

    @Prop({ required: false, type: Number }) 
    updatedAt?: number;
}


export const ComprobanteSchema = SchemaFactory.createForClass(Comprobante);
