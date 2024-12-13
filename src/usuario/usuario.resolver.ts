import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { PipeMongoID } from 'src/common/pipes/mongo-id.pipe';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Resolver(() => Usuario)
export class UsuarioResolver {
  
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => Usuario, { name: 'UsuarioCreate' })
  async createUsuario(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput) : Promise<Usuario>
  {
    return await this.usuarioService.create(createUsuarioInput);
  }

  @Query(() => [Usuario], { name: 'UsuariosAll' , description: 'Retornar todos los usuarios con su relación de Persona de estado TRUE.'})
  async findAll(@Args() paginationArgs : PaginationArgs ) : Promise<Usuario[]>
  {
    return await this.usuarioService.findAll(paginationArgs);
  }

  @Query(() => Usuario, { name: 'UsuarioFindOne', description: 'Retonar un usuario por su ID.' })
  async findOne(@Args('id', PipeMongoID) id: string) : Promise<Usuario>
  {
    return await this.usuarioService.findOne(id);
  }

  @Mutation(() => Usuario, { name:'UsuarioUpdate' })
  async updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput) : Promise<Usuario>
  {
    return await this.usuarioService.update(updateUsuarioInput);
  }

  @Mutation(() => Usuario, { name: 'UsuarioRemove' })
  async removeUsuario(@Args('id') id: string) : Promise<Usuario>
  {
    return await this.usuarioService.remove(id);
  }
}
