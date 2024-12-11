import { Injectable } from '@nestjs/common';
import { ComprobanteService } from 'src/comprobante/comprobante.service';
import { DetalleVentaService } from 'src/detalle_venta/detalle_venta.service';
import { KardexService } from 'src/kardex/kardex.service';
import { MasterService } from 'src/master/master.service';
import { PersonaService } from 'src/persona/persona.service';
import { ProductoService } from 'src/producto/producto.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { VentaService } from 'src/venta/venta.service';
import { MASTER_SEED, PRODUCTS_SEED, USER_SEED, VENTA_SEED } from './data/seed-data';

@Injectable()
export class SeedService {

    constructor(
        private readonly produtoService : ProductoService,
        private readonly comprobanteService : ComprobanteService,
        private readonly detalleVentaService : DetalleVentaService,
        private readonly kardexService : KardexService,
        private readonly masterService : MasterService,
        private readonly personaService : PersonaService,
        private readonly usuarioService : UsuarioService,
        private readonly ventaService : VentaService,        
    ){}

    async executeSeed() : Promise<String> {

        try {

            await this.deleteDataBD()
            
            const users = await this.loadUsersBD()
            const products = await this.loadProductsBD()
            await this.loadMasterBD()
            // await this.loadVentaBD(users, products)
            
            return "SEMILLA EJECUTADA";

        } catch (error) {
            console.log(error)
        }
        
    }

    async deleteDataBD()
    {
             
        await this.produtoService.deleteData(),
        await this.comprobanteService.deleteData(),
        await this.detalleVentaService.deleteData(),
        await this.kardexService.deleteData(),
        await this.masterService.deleteData(),
        await this.personaService.deleteData(),
        await this.usuarioService.deleteData(),
        await this.ventaService.deleteData()
             
    }

    async loadUsersBD() : Promise<string[]> {

        let usu_ids: string[] = []

        for ( const user of USER_SEED)
        {
            const userCreated = await this.usuarioService.create(user)
            await usu_ids.push(userCreated._id)
        }    

        return usu_ids
    }

    async loadProductsBD () : Promise<string[]> {

        let pro_ids : string[] = []

        for ( const product of PRODUCTS_SEED )
        {
            const productCreated = await this.produtoService.create(product)
            await pro_ids.push(productCreated._id)
        }

        return pro_ids
    }

    async loadMasterBD() {
        for( const master of MASTER_SEED )
        {
            await this.masterService.create(master)
        }
    }

/*  async loadVentaBD(usu_ids : string[], pro_ids : string[]) {

        const ventasSeed = VENTA_SEED(usu_ids[0], pro_ids[0])

        for ( let i = 0; i < ventasSeed.length; i++ ) 
        {            
            const usu_id = usu_ids[Math.floor( Math.random() * usu_ids.length )]
            const pro_id = pro_ids[Math.floor( Math.random() * pro_ids.length )]

            const newVenta = VENTA_SEED(usu_id, pro_id)
            
            await this.ventaService.create(newVenta[i])
        }
    } */

}