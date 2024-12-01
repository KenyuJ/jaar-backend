import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PersonaRol, PersonaGenero, PersonaTipo, PersonaTipoDocumento } from "src/common/enums/persona";

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

    @Field(() => PersonaGenero )
    @Prop({ enum: PersonaGenero })
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

    @Field(() => PersonaTipo)
    @Prop({ enum: PersonaTipo })
    per_tipo : string

    @Field(() => PersonaRol)
    @Prop({ enum: PersonaRol })
    per_rol : string

    @Field(() => PersonaTipoDocumento)
    @Prop({ enum: PersonaTipoDocumento })
    per_tipo_identificacion : string

    @Field(() => String)
    @Prop()
    per_num_identificacion : string

    @Field(() => Boolean)
    @Prop({ default: true })
    per_estado : boolean

}

export const personaSchema = SchemaFactory.createForClass(Persona)