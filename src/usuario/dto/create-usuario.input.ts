import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsIn, IsNotEmpty, IsString, MinLength, ValidateNested } from 'class-validator';
import { PersonaTipo } from 'src/common/enums/persona/persona-tipo.enum';
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

  @Field( () => PersonaTipo )
  @IsString()
  @IsEnum(PersonaTipo)
  usu_tipo : string

  @Field( () => CreatePersonaInput )
  @Type( () => CreatePersonaInput )
  @ValidateNested()
  persona : Persona

}
