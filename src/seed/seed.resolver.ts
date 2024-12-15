import { Mutation, Resolver } from '@nestjs/graphql';
import { SeedService } from './seed.service';

@Resolver()
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}

  @Mutation( () => String, { name: 'ExecuteSeed', description: `Llenara la bd con datos de prueba para las tablas de Productos, Usuarios, Master y Ventas.
                                                                Tambien automaticamente se generarán registros para Kardex: ENTRADAS y SALIDAS de Productos.`} )
  async executeSeed() : Promise<String>
  {
    return await this.seedService.executeSeed()
  }
}
