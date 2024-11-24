import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Producto } from 'src/producto/entities/producto.entity';

@ObjectType()
@Schema()
export class DetalleVenta extends Document {

  @Field( ()  => ID , { name: 'det_id' })
  _id : string

  @Field( () => Float )
  @Prop({ required: true })
  det_subtotal : number
  
  @Field( () => Float )
  @Prop({ required: true })
  det_total : number
  
  @Field( () => Boolean )
  @Prop({ required: true })
  det_estado : boolean
  
  @Field( () => Producto, { nullable: true } )
  @Prop({ type: Types.ObjectId, ref: 'Producto' })
  producto : Producto

  @Field( () => Int )
  @Prop({ required: true })
  pro_talla : number
  
  @Field( () => Int )
  @Prop({ required: true })
  pro_cantidad : number
  
  @Field( () => Float )
  @Prop({ required: true })
  pro_precio : number
}

export const detalleVentaSchema = SchemaFactory.createForClass(DetalleVenta);