import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Venta, ventaSchema } from './entities/venta.entity';
import { VentaResolver } from './venta.resolver';
import { VentaService } from './venta.service';
import { DetalleVentaModule } from 'src/detalle_venta/detalle_venta.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { ProductoModule } from 'src/producto/producto.module';
import { KardexModule } from 'src/kardex/kardex.module';

@Module({
    imports: [

        MongooseModule.forFeature([
            {
                name: Venta.name,
                schema: ventaSchema
            }
        ]),
        
        DetalleVentaModule,
        UsuarioModule,
        ProductoModule,
        KardexModule

    ],
    providers: [VentaResolver, VentaService],
    exports: [MongooseModule, VentaService]
})
export class VentaModule {}
