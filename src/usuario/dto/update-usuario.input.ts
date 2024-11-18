import { Persona } from 'src/persona/entities/persona.entity';
import { CreateUsuarioInput } from './create-usuario.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { UpdatePersonaInput } from 'src/persona/dto/update-persona.input';

@InputType()
export class UpdateUsuarioInput extends PartialType(CreateUsuarioInput) {

  @Field( () => ID )
  _id: string;

  @Field( () => UpdatePersonaInput, { nullable: true })
  persona?: Persona
}
