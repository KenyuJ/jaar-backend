import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsBoolean, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { CreatePersonaInput } from 'src/persona/dto/create-persona.input';
import { Persona } from 'src/persona/entities/persona.entity';

@InputType()
export class CreateUsuarioInput {

  @Field( () => String)
  @IsString()
  @MinLength(1)
  usu_nombre : string

  @Field( () => String)
  @IsString()
  @MinLength(1)
  usu_clave : string

  @Field( () => String )
  @IsString()
  @IsIn( ['ADMINISTRADOR', 'CAJA'] )
  usu_tipo_usuario : string

  @Field( () => Boolean, { nullable: true, defaultValue: true, description: 'El valor por defecto es TRUE.' })
  @IsBoolean()
  @IsNotEmpty()
  usu_estado : boolean

  @Field( () => CreatePersonaInput )
  persona : Persona

}
