import { Mutation, Resolver } from '@nestjs/graphql';
import { SeedService } from './seed.service';

@Resolver()
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}

  @Mutation( () => String, { name: 'ExecuteSeed'} )
  async executeSeed() : Promise<String>
  {
    return await this.seedService.executeSeed()
  }
}
