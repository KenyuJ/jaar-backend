import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KardexService } from './kardex.service';
import { Kardex } from './entities/kardex.entity';

@Resolver(() => Kardex)
export class KardexResolver {

  constructor(private readonly kardexService: KardexService) {}

  @Query(() => [Kardex], { name: 'KardexAll' })
  async findAll() : Promise<Kardex[]> {
    return await this.kardexService.findAll();
  }

}
