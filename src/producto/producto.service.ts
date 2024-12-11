import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';

import { Producto } from './entities/producto.entity';

import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Talla } from './entities/talla.entity';
import { KardexService } from 'src/kardex/kardex.service';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Injectable()
export class ProductoService {

  private talla : Talla[] = [ 
    { numero: 36 },
    { numero: 37 },
    { numero: 38 },
    { numero: 39 },
    { numero: 40 },
    { numero: 41 },
    { numero: 42 },
    { numero: 43 },
    { numero: 44 },
    { numero: 45 },
    { numero: 46 },
  ]

  constructor(
    @InjectModel(Producto.name)
    private readonly productoModel : Model<Producto>,
    private readonly kardexService : KardexService
  ){}
  
  async create(createProductoInput: CreateProductoInput) : Promise<Producto>
  {
    try {

      createProductoInput.pro_nombre = createProductoInput.pro_nombre.toUpperCase()
      createProductoInput.pro_marca = createProductoInput.pro_marca.toUpperCase()
      createProductoInput.pro_seccion = createProductoInput.pro_seccion.toUpperCase()

      const newProduct = await this.productoModel.create(createProductoInput)

      await this.kardexService.crearEntrada({ pro_id: newProduct._id })
  
      return newProduct
    } 
    catch (error)
    {
      if (error.code === 11000) throw new BadRequestException(`El producto con el nombre '${createProductoInput.pro_nombre}' ya existe!`)

      console.log(error)
    }
  }

  async findAll(paginationInput : PaginationArgs) : Promise<Producto[]>
  {
    const { limit , offset } = paginationInput
    return await this.productoModel.find({ pro_estado : true }).limit(limit).skip(offset)
  }

  async findOne(term: string)
  {
    let producto : Producto

    if (isValidObjectId(term))
    {
      producto = await this.productoModel.findById(term)  
    }

    if (!producto)
    {
      term = term.toUpperCase()
      producto = await this.productoModel.findOne({ pro_nombre : term })  
    }

    if (!producto)
    {
      throw new NotFoundException(`El producto con el término ${term} no se encuentra.`)  
    }

    return producto;
  }

  async update(updateProductoInput: UpdateProductoInput) : Promise<Producto>
  {
    try {
      
      const { _id, pro_nombre, pro_marca, pro_seccion } = updateProductoInput

      if(pro_nombre) updateProductoInput.pro_nombre = pro_nombre.toUpperCase()
        
      if(pro_marca) updateProductoInput.pro_marca = pro_marca.toUpperCase()

      if(pro_seccion) updateProductoInput.pro_seccion = pro_seccion.toUpperCase()
      
      let producto = await this.findOne(_id)

      producto = await this.productoModel.findByIdAndUpdate(
        producto._id,
        updateProductoInput,
        { new: true }
      )

      return producto
    } 
    catch (error)
    {
      console.log(error)
    }
    
  }

  async remove(id: string) : Promise<Producto>
  {
    try {

      let producto = await this.findOne(id)
  
      producto = await this.productoModel.findByIdAndUpdate(
        producto.id,
        { pro_estado: false },
        { new: true }
      )
  
      return producto

    } 
    catch (error)
    {
      console.log(error)
    }
  }

  get Tallas() : Talla[] {
    return this.talla
  }

  async deleteData() {
    await this.productoModel.deleteMany()
  }

}
