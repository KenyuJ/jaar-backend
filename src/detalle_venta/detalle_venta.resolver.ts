import { Resolver } from '@nestjs/graphql';
import { DetalleVenta } from './entities/detalle_venta.entity';

@Resolver(() => DetalleVenta)
export class DetalleVentaResolver {

}
