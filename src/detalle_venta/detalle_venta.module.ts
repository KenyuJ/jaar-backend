import { Module } from '@nestjs/common';
import { DetalleVentaService } from './detalle_venta.service';
import { DetalleVentaResolver } from './detalle_venta.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DetalleVenta, detalleVentaSchema } from './entities/detalle_venta.entity';
import { ProductoModule } from 'src/producto/producto.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DetalleVenta.name,
        schema: detalleVentaSchema
      }
    ]),
    ProductoModule
  ],
  providers: [DetalleVentaResolver, DetalleVentaService],
})
export class DetalleVentaModule {}
