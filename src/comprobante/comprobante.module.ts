import { Module } from '@nestjs/common';
import { ComprobanteService } from './comprobante.service';
import { ComprobanteResolver } from './comprobante.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Comprobante, ComprobanteSchema } from './entities/comprobante.entity';
import { MasterModule } from 'src/master/master.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { VentaModule } from 'src/venta/venta.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comprobante.name,
        schema: ComprobanteSchema
      }
    ]),

    MasterModule,
    UsuarioModule,
    VentaModule

  ],
  controllers: [],
  providers: [ComprobanteService, ComprobanteResolver],
})
export class ComprobanteModule {}
