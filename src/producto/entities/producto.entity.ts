import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Producto extends Document {

  @Field( () => ID, { name: 'pro_id', nullable: true })
  _id: string

  @Field( () => String )
  @Prop( { unique: true } )
  pro_nombre : string

  @Field( () => String )
  @Prop()
  pro_marca : string

  @Field( () => Float )
  @Prop()
  pro_precio : number

  @Field( () => Int )
  @Prop()
  pro_talla : number

  @Field( () => Int )
  @Prop()
  pro_cantidad : number

  @Field( () => Boolean )
  @Prop({ default: true })
  pro_estado : boolean

  @Field( () => String )
  @Prop()
  pro_seccion : string

}

export const ProductoSchema = SchemaFactory.createForClass( Producto )