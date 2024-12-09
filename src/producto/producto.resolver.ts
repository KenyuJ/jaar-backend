import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductoService } from './producto.service';
import { Producto } from './entities/producto.entity';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';
import { Talla } from './entities/talla.entity';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Resolver(() => Producto)
export class ProductoResolver {

  constructor(private readonly productoService: ProductoService) {}
  
  @Query( () => [Producto], { name: 'ProductAll', description: 'Retorna todos los productos de estado TRUE' })
  async findAll( @Args() paginationArgs: PaginationArgs  ) : Promise<Producto[]>
  {
    return await this.productoService.findAll(paginationArgs);
  }
  
  @Query( () => Producto, { name: 'ProductFindOne', description: 'Retorna un producto por su ID o NOMBRE.' })
  async findOne( @Args('term') term: string) : Promise<Producto>
  {
    return await this.productoService.findOne(term);
  }

  @Mutation( () => Producto, { name: 'ProductCreate' } )
  async createProducto( @Args('createProductoInput') createProductoInput: CreateProductoInput) : Promise<Producto>
  {
    return await this.productoService.create(createProductoInput);
  }

  @Mutation( () => Producto, { name: 'ProductUpdate' } )
  async updateProducto( @Args('updateProductoInput') updateProductoInput: UpdateProductoInput) : Promise<Producto>
  {
    return await this.productoService.update(updateProductoInput);
  }

  @Mutation( () => Producto, { name: 'ProductRemove' , description: 'Actualiza el estado del producto a FALSE' })
  async removeProducto( @Args('id') id: string) : Promise<Producto>
  {
    return await this.productoService.remove(id);
  }

  @Query( () => [Talla], { name: 'TallaAll', description: 'Retorna todas las tallas disponibles.'})
  getTalla() : Talla[] 
  {
    return this.productoService.Tallas
  }
}
