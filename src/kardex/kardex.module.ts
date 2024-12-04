import { Module } from '@nestjs/common';
import { KardexService } from './kardex.service';
import { KardexResolver } from './kardex.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Kardex, kardexSchema } from './entities/kardex.entity';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: Kardex.name,
        schema: kardexSchema
      }
    ]),
    
  ],
  
  providers: [KardexResolver, KardexService],
  exports: [ MongooseModule, KardexService ]
})
export class KardexModule {}
