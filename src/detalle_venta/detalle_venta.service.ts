import { Injectable } from '@nestjs/common';
import { CreateDetalleVentaInput } from './dto/create-detalle_venta.input';
import { UpdateDetalleVentaInput } from './dto/update-detalle_venta.input';
import { InjectModel } from '@nestjs/mongoose';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { Model } from 'mongoose';
import { ProductoService } from 'src/producto/producto.service';
import { isImplicitlyInstallablePlugin } from 'apollo-server-core/dist/ApolloServer';

@Injectable()
export class DetalleVentaService {
  
  constructor(
    @InjectModel(DetalleVenta.name)
    private readonly detalleVentaModel : Model<DetalleVenta>,
    private readonly productoService : ProductoService
  ){}

  async create(createDetalleVentaInput: CreateDetalleVentaInput) : Promise<DetalleVenta>
  {
    const { pro_id, pro_cantidad, det_estado } = createDetalleVentaInput
    const producto = await this.productoService.findOne(pro_id)

    console.log(producto)
    console.log(createDetalleVentaInput)
    
    const subtotal_detalle_venta = producto.pro_precio;
    const total_detalle_venta = producto.pro_precio * pro_cantidad;


    const newDetalleVenta = new this.detalleVentaModel({
      pro_id: producto._id,
      pro_talla: producto.pro_talla,
      pro_cantidad: pro_cantidad,
      pro_precio: producto.pro_precio,
      det_subtotal: subtotal_detalle_venta,
      det_total: total_detalle_venta,
      det_estado: det_estado,
      // ven_id: ven_id
    })

    console.log(newDetalleVenta)

    return (await newDetalleVenta.save()).populate('producto');
  }

  async findAll() : Promise<DetalleVenta[]>
  {
    const p = await this.detalleVentaModel.find().populate('producto')

    console.log(p)
    return p
  }

  async findOne(id: string) {
    return await this.detalleVentaModel.findById(id).populate('producto').exec()
  }

  update(id: number, updateDetalleVentaInput: UpdateDetalleVentaInput) {
    return `This action updates a #${id} detalleVenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleVenta`;
  }
}