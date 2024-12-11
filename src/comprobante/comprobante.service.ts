import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComprobanteInput } from './dto/create-comprobante.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comprobante } from './entities/comprobante.entity';
import { MasterService } from 'src/master/master.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { VentaService } from 'src/venta/venta.service';

@Injectable()
export class ComprobanteService {

  constructor(
    @InjectModel(Comprobante.name)
    private readonly comprobanteModel : Model<Comprobante>,
    private readonly masterService : MasterService,
    private readonly ventaService : VentaService
  ){}

  async findAll() : Promise<Comprobante[]>
  {
    return await this.comprobanteModel.find({ com_estado: true }).populate([
      {
        path: 'venta',
        populate: [
          {
            path: 'usuario',
            populate: 'persona'
          },
          { 
          path: 'detalle_venta',
          model: 'DetalleVenta',
          populate: 'producto'
        }]
      }
    ])
  }

  async create(createComprobanteInput: CreateComprobanteInput) : Promise<Comprobante>
  {
    const { mas_id, ven_id } = createComprobanteInput

    const venta = await this.ventaService.findOne(ven_id)
    const configMaster = await this.masterService.findOne(mas_id)
    
    const newComprobante = new this.comprobanteModel({
      com_fecha_emision: new Date(),
      com_tipo: configMaster.mas_nombre,
      com_serie: configMaster.mas_serie,
      com_numero: configMaster.mas_nro,
      venta: venta._id
    })

    await this.masterService.incrementNroComprobante(mas_id)

    return (await newComprobante.save()).populate(['usuario', 'venta'])
  }

  async findOne(id: string) : Promise<Comprobante>
  {
    const comprobante = await this.comprobanteModel.findById(id)

    if(!comprobante) throw new NotFoundException(`El comprobante con el id ${id} no existe`)

    return comprobante
  }

  async remove(id: string ) : Promise<Comprobante>
  {
    const comprobante = await this.findOne(id)

    const comprobanteDeleted = await this.comprobanteModel.findByIdAndUpdate(
      id,
      { com_estado: false },
      { new : true}
    )

    return comprobanteDeleted
  }

  async deleteData() {
    await this.comprobanteModel.deleteMany()
  }
}
