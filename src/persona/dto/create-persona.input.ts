import { Field, InputType,} from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { PersonaGenero } from 'src/common/enums/persona';
import { PersonaRol } from 'src/common/enums/persona/persona-rol.enum';
import { PersonaTipoDocumento } from 'src/common/enums/persona/persona-tipo-documento.enum';
import { PersonaTipo } from 'src/common/enums/persona/persona-tipo.enum';

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

    @Field(() => PersonaGenero)
    @IsString()
    @IsEnum(PersonaGenero)
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

    @Field(() => PersonaTipo)
    @IsString()
    @MinLength(1)
    @IsEnum(PersonaTipo)
    per_tipo : string

    @Field(() => PersonaRol)
    @IsString()
    @MinLength(1)
    @IsEnum(PersonaRol)
    per_rol : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_tipo_identificacion : string

    @Field(() => String)
    @IsString()
    @MinLength(1)
    per_num_identificacion : string

}   