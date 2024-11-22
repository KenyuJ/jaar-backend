import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MasterService } from './master.service';
import { Master } from './entities/master.entity';
import { CreateMasterInput } from './dto/create-master.input';
import { UpdateMasterInput } from './dto/update-master.input';

@Resolver(() => Master)
export class MasterResolver {
  constructor(private readonly masterService: MasterService) {}

  @Mutation(() => Master)
  async createMaster(@Args('createMasterInput') createMasterInput: CreateMasterInput) : Promise<Master>
  {
    return await this.masterService.create(createMasterInput);
  }

  @Query(() => [Master], { name: 'AllMaster' })
  async findAll() : Promise<Master[]>
  {
    return await this.masterService.findAll();
  }

  @Query(() => Master, { name: 'FindOneMaster' , description: 'Devuelve una configuración por su ID o Nombre.' })
  findOne(@Args('term', { type: () => String }) term: string) {
    return this.masterService.findOne(term);
  }

  @Mutation(() => Master, { description: 'Actualiza una configuración por su ID'})
  async updateMaster(@Args('updateMasterInput') updateMasterInput: UpdateMasterInput) : Promise<Master>
  {
    return await this.masterService.update(updateMasterInput);
  }

  @Mutation(() => Master)
  removeMaster(@Args('id', { type: () => String }) id: string) {
    return this.masterService.remove(id);
  }
}
