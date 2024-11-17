import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaResolver } from './persona.resolver';
import { Persona, personaSchema } from './entities/persona.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Persona.name,
        schema : personaSchema
      }
    ])    
  ],
  providers: [PersonaResolver, PersonaService],
  exports: [
    MongooseModule,
    PersonaService
  ]
})
export class PersonaModule {}
