import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleVentaInput } from './dto/create-detalle_venta.input';
import { InjectModel } from '@nestjs/mongoose';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { Model } from 'mongoose';
import { ProductoService } from 'src/producto/producto.service';

@Injectable()
export class DetalleVentaService {
  
  constructor(
    @InjectModel(DetalleVenta.name)
    private readonly detalleVentaModel : Model<DetalleVenta>,
    private readonly productoService : ProductoService
  ){}

  async create(createDetalleVentaInput: CreateDetalleVentaInput) : Promise<DetalleVenta>
  {
    const { pro_id, pro_cantidad} = createDetalleVentaInput
    const producto = await this.productoService.findOne(pro_id)

    const subtotal_detalle_venta = producto.pro_precio;
    const total_detalle_venta = producto.pro_precio * pro_cantidad;

    const newDetalleVenta = new this.detalleVentaModel({
      producto: producto._id,
      pro_talla: producto.pro_talla,
      pro_cantidad: pro_cantidad,
      pro_precio: producto.pro_precio,
      det_subtotal: subtotal_detalle_venta,
      det_total: total_detalle_venta
    })

    producto.pro_cantidad -= pro_cantidad
    await producto.save();

    return await newDetalleVenta.save()
  }

}
