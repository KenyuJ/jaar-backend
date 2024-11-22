import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterResolver } from './master.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, masterSchema } from './entities/master.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Master.name,
        schema: masterSchema
      }
    ])
  ],
  providers: [MasterResolver, MasterService],
})
export class MasterModule {}
