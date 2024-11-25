import { Document, Types } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Venta } from "src/venta/entities/venta.entity";

@ObjectType()
@Schema() 
export class Comprobante extends Document {
  
    @Field( () => ID, { name: 'com_id' })
    _id: string;

    @Field( () => Int )
    @Prop({ required: true }) 
    com_serie: number;

    @Field( () => Int)
    @Prop({ required: true })
    com_numero : number
    
    @Field( () => String )
    @Prop({ required: true, enum: ['BOLETA', 'FACTURA'] }) 
    com_tipo: string;

    @Field( () => Date )
    @Prop({ required: true }) 
    com_fecha_emision: Date;

    @Field( () => Usuario )
    @Prop({ type: Types.ObjectId, ref: 'Usuario' }) 
    usuario: string;

    // @Prop({ required: true, type: Number}) 
    // com_total: number;

    @Field( () => Venta )
    @Prop({ type: Types.ObjectId, ref: 'Venta' }) 
    venta: string;
    
    @Field( () => Boolean )
    @Prop({ default: true }) 
    com_estado: boolean;

    // @Prop({ required: true, type: Number }) 
    // createdAt: number;

    // @Prop({ required: false, type: Number }) 
    // updatedAt?: number;
}

export const ComprobanteSchema = SchemaFactory.createForClass(Comprobante);