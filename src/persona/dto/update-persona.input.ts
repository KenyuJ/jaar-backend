import { Usuario } from 'src/usuario/entities/usuario.entity';
import { CreatePersonaInput } from './create-persona.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePersonaInput extends PartialType(CreatePersonaInput) {

  @Field(() => ID, { nullable: true })
  _id: string;

}