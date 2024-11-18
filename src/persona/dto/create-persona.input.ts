import { Field, InputType,} from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePersonaInput {

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_nombre : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_apellido : string

    @Field(() => String)
    @IsString()
    @IsIn( ['MASCULINO', 'FEMENINO', 'OTRO'] )
    per_sexo : string

    @Field(() => String)
    @IsString()
    @MaxLength(9)
    per_telefono : string

    @Field(() => String)
    @IsEmail()
    @MinLength(1)
    per_email : string

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    per_direccion? : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_razon_social : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_tipo_persona : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_rol : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_tipo_identificacion : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_num_identificacion : string

    @Field(() => Boolean, { nullable: true, defaultValue: true, description: 'El valor por defecto es TRUE.'})
    @IsBoolean()
    @IsNotEmpty()
    per_estado : boolean

}   