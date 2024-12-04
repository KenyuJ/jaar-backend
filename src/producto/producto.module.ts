import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoResolver } from './producto.resolver';

import { Producto, ProductoSchema } from './entities/producto.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { KardexModule } from 'src/kardex/kardex.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
          name: Producto.name,
          schema: ProductoSchema
        }
      ]
    ),
    KardexModule
  ],
  providers: [ProductoResolver, ProductoService],
  exports: [
    MongooseModule,
    ProductoService
  ]
})
export class ProductoModule {}
