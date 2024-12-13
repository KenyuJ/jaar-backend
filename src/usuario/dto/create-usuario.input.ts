import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsEnum, IsString, MinLength, ValidateNested } from 'class-validator';
import { UsuarioTipo } from 'src/common/enums/usuario/usuario-tipo.enum';
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

  @Field( () => UsuarioTipo )
  @IsString()
  @IsEnum(UsuarioTipo)
  usu_tipo : string

  @Field( () => CreatePersonaInput )
  @Type( () => CreatePersonaInput )
  @ValidateNested()
  persona : CreatePersonaInput

}
