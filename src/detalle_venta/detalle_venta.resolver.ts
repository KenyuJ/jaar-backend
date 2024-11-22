import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DetalleVentaService } from './detalle_venta.service';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { CreateDetalleVentaInput } from './dto/create-detalle_venta.input';
import { UpdateDetalleVentaInput } from './dto/update-detalle_venta.input';

@Resolver(() => DetalleVenta)
export class DetalleVentaResolver {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}

  @Mutation(() => DetalleVenta)
  async createDetalleVenta(@Args('createDetalleVentaInput') createDetalleVentaInput: CreateDetalleVentaInput) : Promise<DetalleVenta>
  {
    return await this.detalleVentaService.create(createDetalleVentaInput);
  }

  @Query(() => [DetalleVenta], { name: 'detalleVenta' })
  async findAll() : Promise<DetalleVenta[]>
  {
    return await this.detalleVentaService.findAll();
  }

  @Query(() => DetalleVenta, { name: 'findOneDetalleVenta' })
  findOne(@Args('id', { type: () => String }) id: string) : Promise<DetalleVenta>
  {
    return this.detalleVentaService.findOne(id);
  }

  // @Mutation(() => DetalleVenta)
  // updateDetalleVenta(@Args('updateDetalleVentaInput') updateDetalleVentaInput: UpdateDetalleVentaInput) {
  //   return this.detalleVentaService.update(updateDetalleVentaInput.id, updateDetalleVentaInput);
  // }

  // @Mutation(() => DetalleVenta)
  // removeDetalleVenta(@Args('id', { type: () => Int }) id: number) {
  //   return this.detalleVentaService.remove(id);
  // }
}
