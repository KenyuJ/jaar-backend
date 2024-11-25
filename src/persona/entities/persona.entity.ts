import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@ObjectType()
@Schema()
export class Persona extends Document {

    @Field(() => ID, { name: 'per_id' })
    _id : string
    
    @Field(() => String)
    @Prop()
    per_nombre : string

    @Field(() => String)
    @Prop()
    per_apellido : string

    @Field(() => String)
    @Prop({ enum: ['MASCULINO', 'FEMENINO', 'OTRO'] })
    per_sexo : string

    @Field(() => String)
    @Prop()
    per_telefono : string

    @Field(() => String)
    @Prop()
    per_email : string

    @Field(() => String, { nullable: true })
    @Prop()
    per_direccion? : string

    @Field(() => String)
    @Prop()
    per_razon_social : string

    @Field(() => String)
    @Prop()
    per_tipo_persona : string

    @Field(() => String)
    @Prop()
    per_rol : string

    @Field(() => String)
    @Prop()
    per_tipo_identificacion : string

    @Field(() => String)
    @Prop()
    per_num_identificacion : string

    @Field(() => Boolean)
    @Prop({ default: true })
    per_estado : boolean

}

export const personaSchema = SchemaFactory.createForClass(Persona)