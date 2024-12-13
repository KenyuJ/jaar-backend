import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Venta } from './entities/venta.entity';
import { VentaService } from './venta.service';
import { CreateVentaInput } from './dto/create-venta.input';
import { Query } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Resolver( () => Venta )
export class VentaResolver {

    constructor( private readonly ventaService : VentaService ){}

    @Mutation( () => Venta, { name: 'VentaCreate' })
    async createVenta(@Args('createVentaInput') createVentaInput : CreateVentaInput) : Promise<Venta>
    {
        return await this.ventaService.create(createVentaInput)
    }

    @Query( () => [Venta], { name: 'VentaAll' } )
    async allVentas(@Args() paginationArgs : PaginationArgs ) : Promise<Venta[]>
    {   
        return await this.ventaService.findAll(paginationArgs)
    }

    @Query( () => Venta, { name: 'VentaFindOne' } )
    async findOne(@Args('id', { type: () => String }) id: string) : Promise<Venta>
    {
        return await this.ventaService.findOne(id)
    }

}