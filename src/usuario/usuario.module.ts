import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';
import { Usuario, usuarioSchema } from './entities/usuario.entity';
import { PersonaModule } from 'src/persona/persona.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: usuarioSchema
      }
    ]),

    PersonaModule
  ],
  providers: [UsuarioResolver, UsuarioService],
  exports: [
    MongooseModule,
    UsuarioService
  ]
})
export class UsuarioModule {}
