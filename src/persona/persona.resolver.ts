import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PersonaService } from './persona.service';
import { Persona } from './entities/persona.entity';
import { CreatePersonaInput } from './dto/create-persona.input';
import { UpdatePersonaInput } from './dto/update-persona.input';

@Resolver()
export class PersonaResolver {
  constructor(private readonly personaService: PersonaService) {}

  // @Query( () => [Persona], { name: 'AllPersonas' } )
  // async findAll()
  // {
  //   return await this.personaService.findAll();
  // }

  // @Mutation(() => Persona)
  // async createUsuario(@Args('createPersonaInput') createPersonaInput: CreatePersonaInput) {
  //   return await this.personaService.create(createPersonaInput);
  // }

  // @Mutation( () => Persona, { name: 'UpdatePersona' } )
  // async updateProducto( @Args('updatePersonaInput') updatePersonaInput: UpdatePersonaInput)
  // {
  //   return await this.personaService.update(updatePersonaInput);
  // }

}
