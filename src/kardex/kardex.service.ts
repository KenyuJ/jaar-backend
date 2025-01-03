import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Kardex } from './entities/kardex.entity';
import { Model } from 'mongoose';
import { KardexTipoMovimiento } from 'src/common/enums/kardex/kardex-tipo-movimiento.enum';
import { CreateKardexSalidaInput } from './dto/create-kardex-salida.input';
import { CreateKardexEntradaInput } from './dto/create-kardex-entrada.input';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Injectable()
export class KardexService {

  constructor(
    @InjectModel(Kardex.name)
    private readonly kardexModel : Model<Kardex>
  ){}

  async crearEntrada(createKardexInput: CreateKardexEntradaInput)
  {
    const { pro_id } = createKardexInput

    const kardex = new this.kardexModel({
      kar_fecha_movimiento: new Date(),
      kar_tipo_movimiento: KardexTipoMovimiento.ENTRADA,
      producto: pro_id
    })

    await kardex.save()
  }

  async crearSalida(createKardexInput : CreateKardexSalidaInput)
  {
    const { ven_id  } = createKardexInput

    const kardex = new this.kardexModel({
      kar_fecha_movimiento: new Date(),
      kar_tipo_movimiento: KardexTipoMovimiento.SALIDA,
      venta: ven_id
    })

    await kardex.save()
  }

  async findAll(paginationArgs : PaginationArgs ) : Promise<Kardex[]>
  {
    const { limit, offset } = paginationArgs
    const kardex = await this.kardexModel.find().populate([
      'producto',
      { 
        path: 'venta',
        populate: [
          {
            path: 'detalle_venta', 
            model: 'DetalleVenta', 
            populate: 'producto'
          },
          'usuario'
        ]    
      }
    ]).limit(limit).skip(offset)

    return kardex
  }

  async deleteData() {
    await this.kardexModel.deleteMany()
  }
}
