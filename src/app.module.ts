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

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/jaar'),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ ApolloServerPluginLandingPageLocalDefault() ]
    }),

    ProductoModule,

    PersonaModule,

    UsuarioModule,

    MasterModule

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
