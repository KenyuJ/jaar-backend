import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver(() => Usuario)
export class UsuarioResolver {
  
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => Usuario)
  async createUsuario(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput) : Promise<Usuario>
  {
    return await this.usuarioService.create(createUsuarioInput);
  }

  @Query(() => [Usuario], { name: 'AllUsuarios' , description: 'Retornar todos los usuarios con su relación de Persona de estado TRUE.'})
  async findAll() : Promise<Usuario[]>
  {
    return await this.usuarioService.findAll();
  }

  @Query(() => Usuario, { name: 'findUsuarioByID' })
  async findOne(@Args('id', { type: () => String }) id: string) : Promise<Usuario>
  {
    return await this.usuarioService.findOne(id);
  }

  @Mutation(() => Usuario)
  async updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput) : Promise<Usuario>
  {
    return await this.usuarioService.update(updateUsuarioInput);
  }

  // @Mutation(() => Usuario)
  // removeUsuario(@Args('id', { type: () => Int }) id: number) {
  //   return this.usuarioService.remove(id);
  // }
}
