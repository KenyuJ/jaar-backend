import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Comprobante } from './entities/comprobante.entity';
import { ComprobanteService } from './comprobante.service';
import { CreateComprobanteInput } from './dto/create-comprobante.input';

@Resolver()
export class ComprobanteResolver {

    constructor( private readonly comprobanteService : ComprobanteService ){}

    @Query( () => [Comprobante], { name: 'ComprobanteAll' } )
    async findAll() : Promise<Comprobante[]> 
    {
        return await this.comprobanteService.findAll()
    }

    @Mutation( () => Comprobante, { name: 'ComprobanteCreate' } )
    async create( @Args('createComprobanteInput') createComprobanteInput : CreateComprobanteInput ) : Promise<Comprobante>
    {
        return await this.comprobanteService.create(createComprobanteInput)
    }
    
    @Mutation( () => Comprobante, { name: 'ComprobanteRemove' } )
    async remove(@Args('id') id : string) : Promise<Comprobante>
    {
        return await this.comprobanteService.remove(id)
    }

}
