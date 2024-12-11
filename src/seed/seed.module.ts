import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ProductoModule } from 'src/producto/producto.module';
import { ComprobanteModule } from 'src/comprobante/comprobante.module';
import { DetalleVentaModule } from 'src/detalle_venta/detalle_venta.module';
import { KardexModule } from 'src/kardex/kardex.module';
import { MasterModule } from 'src/master/master.module';
import { PersonaModule } from 'src/persona/persona.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { VentaModule } from 'src/venta/venta.module';

@Module({
  imports: [
    ProductoModule,
    ComprobanteModule,
    DetalleVentaModule,
    KardexModule,
    MasterModule,
    PersonaModule,
    UsuarioModule,
    VentaModule
  ],
  providers: [SeedResolver, SeedService],
})
export class SeedModule {}
