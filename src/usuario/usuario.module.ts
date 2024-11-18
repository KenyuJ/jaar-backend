import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';
import { Usuario, usuarioSchema } from './entities/usuario.entity';
import { PersonaModule } from 'src/persona/persona.module';
import { Persona } from 'src/persona/entities/persona.entity';
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
  exports: []
})
export class UsuarioModule {}
