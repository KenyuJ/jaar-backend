import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Persona } from 'src/persona/entities/persona.entity';

@ObjectType()
@Schema()
export class Usuario extends Document {

  @Field(() => ID, {name: 'usu_id'})
  _id : string

  @Field(() => String)
  @Prop({ unique: true })
  usu_nombre : string

  @Field(() => String)
  @Prop()
  usu_clave : string

  @Field(() => String)
  @Prop( { enum: ['ADMINISTRADOR', 'CAJA'] })
  usu_tipo_usuario : string

  @Field(() => Boolean)
  @Prop()
  usu_estado? : boolean

  @Field(() => Persona, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Persona' })
  persona : Persona

}

export const usuarioSchema = SchemaFactory.createForClass(Usuario)
