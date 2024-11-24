import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Venta, ventaSchema } from './entities/venta.entity';
import { VentaResolver } from './venta.resolver';
import { VentaService } from './venta.service';
import { DetalleVentaModule } from 'src/detalle_venta/detalle_venta.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { DetalleVenta, detalleVentaSchema } from 'src/detalle_venta/entities/detalle_venta.entity';

@Module({
    imports: [

        MongooseModule.forFeature([
            {
                name: Venta.name,
                schema: ventaSchema
            }
        ]),
        
        DetalleVentaModule,
        UsuarioModule

    ],
    providers: [VentaResolver, VentaService],
    exports: [MongooseModule, VentaService]
})
export class VentaModule {}
