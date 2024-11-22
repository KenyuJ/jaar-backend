import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Master extends Document {

  @Field(() => ID, { name: 'mas_id' })
  _id : string

  @Field( () => String )
  @Prop({ required: true, unique: true })
  mas_nombre: string;

  @Field( () => Int )
  @Prop({ required: true })
  mas_serie: number

  @Field( () => Int )
  @Prop({ required: true })
  mas_incremento: number

}

export const masterSchema = SchemaFactory.createForClass(Master);