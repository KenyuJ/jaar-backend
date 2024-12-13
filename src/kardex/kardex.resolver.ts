import { Resolver, Query, Args } from '@nestjs/graphql';
import { KardexService } from './kardex.service';
import { Kardex } from './entities/kardex.entity';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Resolver(() => Kardex)
export class KardexResolver {

  constructor(private readonly kardexService: KardexService) {}

  @Query(() => [Kardex], { name: 'KardexAll' })
  async findAll( @Args() paginationArgs : PaginationArgs ) : Promise<Kardex[]> {
    return await this.kardexService.findAll(paginationArgs);
  }

}
