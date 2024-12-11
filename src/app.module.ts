import { join } from 'path';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ProductoModule } from './producto/producto.module';
import { PersonaModule } from './persona/persona.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MasterModule } from './master/master.module';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';
import { VentaModule } from './venta/venta.module';
import { ComprobanteModule } from './comprobante/comprobante.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { KardexModule } from './kardex/kardex.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [

    ConfigModule.forRoot(),
    
    MongooseModule.forRoot(process.env.DB_URL),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ ApolloServerPluginLandingPageLocalDefault() ]
    }),

    ProductoModule,

    PersonaModule,

    UsuarioModule,

    MasterModule,

    DetalleVentaModule,

    VentaModule,

    ComprobanteModule,

    AuthModule,

    KardexModule,

    SeedModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/*
@nestjs/graphql
@nestjs/apollo
graphql
apollo-server-express
apollo-server-core
*/
