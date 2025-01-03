import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta } from './entities/venta.entity';
import { CreateVentaInput } from './dto/create-venta.input';
import { DetalleVentaService } from 'src/detalle_venta/detalle_venta.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateDetalleVentaInput } from 'src/detalle_venta/dto/create-detalle_venta.input';
import { ProductoService } from 'src/producto/producto.service';
import { KardexService } from 'src/kardex/kardex.service';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Injectable()
export class VentaService {

    constructor(
        @InjectModel(Venta.name)
        private readonly ventaModel : Model<Venta>,
        private readonly detalleVentaService : DetalleVentaService,
        private readonly usuarioService : UsuarioService,
        private readonly productoService: ProductoService,
        private readonly kardexService : KardexService
    ){}

    async findAll(paginationArgs : PaginationArgs) : Promise<Venta[]>
    {
        const { limit, offset } = paginationArgs
        const venta = await this.ventaModel.find().populate([ 
            {
                path: 'usuario',
                populate: 'persona'
                
            },
            { 
                path: 'detalle_venta',
                model: 'DetalleVenta',
                populate: 'producto'
            }
        ]).limit(limit).skip(offset);

        return venta;
    }

    async findOne( id : string) : Promise<Venta>
    {
        const venta = await this.ventaModel.findById(id).populate([
            {
                path: 'usuario',
                populate: 'persona'
                
            },
            { 
                path: 'detalle_venta',
                model: 'DetalleVenta',
                populate: 'producto'
            }
        ])

        if(!venta) throw new NotFoundException(`La venta con el id ${id} no existe.`)

        return venta;
    }

    async create(createVentaInput: CreateVentaInput): Promise<Venta>
    {
        // Desestructuracion de los detalles venta[]
        const { detalle_venta } = createVentaInput;

        // Validados si existe el usuario
        const usuario = await this.usuarioService.findOne(createVentaInput.usu_id)

        // Validamos que todos los productos recibios tengan stock antes de comenzar con el registro de la venta y detalleventa
        for ( const detalle of detalle_venta )
        {
            const producto = await this.productoService.findOne(detalle.pro_id)

            if( detalle.pro_cantidad > producto.pro_cantidad )
                throw new NotFoundException(`El producto ${ producto.pro_nombre } no cuenta con el stock suficiente.`)
        }
         
        // Instancia de un documento de VENTA
        const venta = new this.ventaModel({
            ven_tipo_pago: createVentaInput.ven_tipo_pago,
            usuario: usuario._id,
            ven_fecha: new Date(),
            ven_total: 0,
            detalle_venta: []
        });

        let total_venta = 0;

        // Recorrer array de detalles venta para insertar
        for (const detalle of detalle_venta)
        {
            // Inserccion de detalle venta
            const detalle_insertado = await this.detalleVentaService.create(detalle);
            
            // Acumulador del total de cada detalle
            total_venta += detalle_insertado.det_total;

            // Agregamos el _id del detalle venta generado a VENTA
            venta.detalle_venta.push(detalle_insertado._id)
        }

        venta.ven_total = total_venta;

        await this.kardexService.crearSalida({ ven_id : venta._id })

        return (await venta.save()).populate(['usuario', { path: 'detalle_venta', model: 'DetalleVenta' }]);
    }

    async deleteData() {
        await this.ventaModel.deleteMany()
    }
}
