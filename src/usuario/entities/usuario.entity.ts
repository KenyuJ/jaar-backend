import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UsuarioTipo } from 'src/common/enums/usuario/usuario.tipo.enum';
import { Persona } from 'src/persona/entities/persona.entity';

@ObjectType()
@Schema()
export class Usuario extends Document {

  @Field(() => ID, {name: 'usu_id'})
  _id : string

  @Field(() => String)
  @Prop({ unique: true })
  usu_nombre : string

  @Prop()
  usu_clave : string

  @Field(() => UsuarioTipo)
  @Prop( { enum: UsuarioTipo })
  usu_tipo : string

  @Field(() => Boolean)
  @Prop({ default: true })
  usu_estado? : boolean

  @Field(() => Persona, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Persona' })
  persona : Persona

}

export const usuarioSchema = SchemaFactory.createForClass(Usuario)
