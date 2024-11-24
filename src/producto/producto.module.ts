import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoResolver } from './producto.resolver';

import { Producto, ProductoSchema } from './entities/producto.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
          name: Producto.name,
          schema: ProductoSchema
        }
      ]
    )
  ],
  providers: [ProductoResolver, ProductoService],
  exports: [
    MongooseModule,
    ProductoService
  ]
})
export class ProductoModule {}
