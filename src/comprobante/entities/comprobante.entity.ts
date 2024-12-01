import { Document, Types } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Venta } from "src/venta/entities/venta.entity";
import { ComprobanteTipo } from "src/common/enums/comprobante/comprobante-tipo.enum";

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
    
    @Field( () => ComprobanteTipo )
    @Prop({ required: true, enum: ComprobanteTipo }) 
    com_tipo: string;

    @Field( () => Date )
    @Prop({ required: true }) 
    com_fecha_emision: Date;

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