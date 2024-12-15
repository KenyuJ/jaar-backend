import { PersonaRol, PersonaTipo, PersonaTipoDocumento } from "src/common/enums/persona";
import { UsuarioTipo } from "src/common/enums/usuario/usuario-tipo.enum";
import { VentaTipoPago } from "src/common/enums/venta/venta-tipo-pago.enum";
import { CreateMasterInput } from "src/master/dto/create-master.input";
import { CreateProductoInput } from "src/producto/dto/create-producto.input";
import { CreateUsuarioInput } from "src/usuario/dto/create-usuario.input";
import { CreateVentaInput } from "src/venta/dto/create-venta.input";

export const USER_SEED: CreateUsuarioInput[] = [
    {
        usu_nombre: "ADMIN",
        usu_clave: "ADMIN",
        usu_tipo: UsuarioTipo.ADMINISTRADOR,
        persona: {        
            per_nombre : "ADMIN NOMBRE",
            per_apellido : "ADMIN APELLIDO",
            per_sexo : "MASCULINO",
            per_telefono : "987654321",
            per_email : "admin@gmail.com",
            per_direccion : "Av. 10, Calle #10",
            per_razon_social : "ADMINISTRADOR RAZON SOCIAL",
            per_tipo : PersonaTipo.EMPLEADO,
            per_rol : PersonaRol.USUARIO,
            per_tipo_identificacion : PersonaTipoDocumento.DNI,
            per_num_identificacion : "48597852"
        }
    },
    {
        usu_nombre: "CAJA",
        usu_clave: "CAJA",
        usu_tipo: UsuarioTipo.CAJA,
        persona: {        
            per_nombre : "CAJA NOMBRE",
            per_apellido : "CAJA APELLIDO",
            per_sexo : "MASCULINO",
            per_telefono : "978458258",
            per_email : "caja@gmail.com",
            per_direccion : "Jr. 80, Calle #80",
            per_razon_social : "CAJA RAZON SOCIAL",
            per_tipo : PersonaTipo.EMPLEADO,
            per_rol : PersonaRol.USUARIO,
            per_tipo_identificacion : PersonaTipoDocumento.DNI,
            per_num_identificacion : "87987485"
        } 
    },    
    {
        usu_nombre: "DIEGOSV",
        usu_clave: "123",
        usu_tipo: UsuarioTipo.ADMINISTRADOR,
        persona: {        
            per_nombre : "DIEGO",
            per_apellido : "SANTOS",
            per_sexo : "MASCULINO",
            per_telefono : "988755698",
            per_email : "diego@gmail.com",
            per_direccion : "Jr. 80, Calle #01",
            per_razon_social : "",
            per_tipo : PersonaTipo.EMPLEADO,
            per_rol : PersonaRol.USUARIO,
            per_tipo_identificacion : PersonaTipoDocumento.DNI,
            per_num_identificacion : "76584789"
        } 
    },
]

export const PRODUCTS_SEED: CreateProductoInput[] = [
    {
      pro_nombre: 'Nike Air Zoom Pegasus 39',
      pro_marca: 'Nike',
      pro_precio: 120.00,
      pro_talla: 42,
      pro_seccion: 'Calzado Deportivo',
      pro_cantidad: 200,
      pro_color: 'Rojo'
    },
    {
      pro_nombre: 'Adidas Ultraboost 23',
      pro_marca: 'Adidas',
      pro_precio: 180.00,
      pro_talla: 43,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 150,
      pro_color: 'Azul'
    },
    {
      pro_nombre: 'Puma RS-X3 Puzzle',
      pro_marca: 'Puma',
      pro_precio: 110.00,
      pro_talla: 41,
      pro_seccion: 'Zapatillas Casual',
      pro_cantidad: 250,
      pro_color: 'Blanco'
    },
    {
      pro_nombre: 'Reebok Nano X2',
      pro_marca: 'Reebok',
      pro_precio: 130.00,
      pro_talla: 44,
      pro_seccion: 'Calzado CrossFit',
      pro_cantidad: 100,
      pro_color: 'Gris'
    },
    {
      pro_nombre: 'Under Armour HOVR Phantom 3',
      pro_marca: 'Under Armour',
      pro_precio: 140.00,
      pro_talla: 45,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 120,
      pro_color: 'Rojo'
    },
    {
      pro_nombre: 'New Balance 990v5',
      pro_marca: 'New Balance',
      pro_precio: 160.00,
      pro_talla: 40,
      pro_seccion: 'Zapatillas Lifestyle',
      pro_cantidad: 80,
      pro_color: 'Negro'
    },
    {
      pro_nombre: 'Asics Gel-Kayano 29',
      pro_marca: 'Asics',
      pro_precio: 150.00,
      pro_talla: 46,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 140,
      pro_color: '"Blanco'
    },
    {
      pro_nombre: 'Saucony Endorphin Speed 3',
      pro_marca: 'Saucony',
      pro_precio: 170.00,
      pro_talla: 42,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 110,
      pro_color: 'Amarillo'
    },
    {
      pro_nombre: 'Nike Zoom Freak 5',
      pro_marca: 'Nike',
      pro_precio: 140.00,
      pro_talla: 43,
      pro_seccion: 'Zapatillas Baloncesto',
      pro_cantidad: 200,
      pro_color: 'Gris'
    },
    {
      pro_nombre: 'Adidas X Speedportal 1',
      pro_marca: 'Adidas',
      pro_precio: 220.00,
      pro_talla: 44,
      pro_seccion: 'Zapatillas Fútbol',
      pro_cantidad: 90,
      pro_color: 'Verde'
    },
    {
      pro_nombre: 'Nike React Infinity Run 3',
      pro_marca: 'Nike',
      pro_precio: 140.00,
      pro_talla: 40,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 180,
      pro_color: 'Naranja'
    },
    {
      pro_nombre: 'Under Armour Charged Bandit 7',
      pro_marca: 'Under Armour',
      pro_precio: 110.00,
      pro_talla: 42,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 140,
      pro_color: 'Verde'
    },
    {
      pro_nombre: 'Puma Future Rider',
      pro_marca: 'Puma',
      pro_precio: 80.00,
      pro_talla: 41,
      pro_seccion: 'Zapatillas Lifestyle',
      pro_cantidad: 160,
      pro_color: 'Negro'
    },
    {
      pro_nombre: 'Adidas Predator Edge',
      pro_marca: 'Adidas',
      pro_precio: 190.00,
      pro_talla: 44,
      pro_seccion: 'Zapatillas Fútbol',
      pro_cantidad: 130,
      pro_color: 'Azul'
    },
    {
      pro_nombre: 'Reebok Classic Leather Legacy',
      pro_marca: 'Reebok',
      pro_precio: 85.00,
      pro_talla: 40,
      pro_seccion: 'Zapatillas Casual',
      pro_cantidad: 200,
      pro_color: 'Rojo'
    },
    {
      pro_nombre: 'Asics Gel-Nimbus 24',
      pro_marca: 'Asics',
      pro_precio: 160.00,
      pro_talla: 43,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 110,
      pro_color: 'Azul'
    },
    {
      pro_nombre: 'New Balance FuelCell Rebel V2',
      pro_marca: 'New Balance',
      pro_precio: 130.00,
      pro_talla: 44,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 140,
      pro_color: 'Blanco'
    },
    {
      pro_nombre: 'Nike Zoom Pegasus Turbo 2',
      pro_marca: 'Nike',
      pro_precio: 150.00,
      pro_talla: 45,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 90,
      pro_color: 'Gris'
    },
    {
      pro_nombre: 'Saucony Triumph 19',
      pro_marca: 'Saucony',
      pro_precio: 160.00,
      pro_talla: 46,
      pro_seccion: 'Zapatillas Running',
      pro_cantidad: 70,
      pro_color: 'Naranja'
    },
    {
      pro_nombre: 'Puma Caliber',
      pro_marca: 'Puma',
      pro_precio: 95.00,
      pro_talla: 43,
      pro_seccion: 'Zapatillas Lifestyle',
      pro_cantidad: 120,
      pro_color: 'Rojo'
    },
];
  
export const MASTER_SEED : CreateMasterInput[] = [
    {
        mas_nombre: "BOLETA",
        mas_serie: "B001",
        mas_nro: 1
    },
    {
        mas_nombre: "FACTURA",
        mas_serie: "F001",
        mas_nro: 1
    }
]

export const VENTA_SEED = (usu_id : string, pro_id : string) : CreateVentaInput[] => [
    {
        ven_tipo_pago: VentaTipoPago.CREDITO,
        usu_id: usu_id,
        detalle_venta: [{
            pro_id: pro_id,
            pro_cantidad: 10
        }]
    },
    {
        ven_tipo_pago: VentaTipoPago.CREDITO,
        usu_id: usu_id,
        detalle_venta: [{
            pro_id: pro_id,
            pro_cantidad: 2
        }]
    },
    {
        ven_tipo_pago: VentaTipoPago.CREDITO,
        usu_id: usu_id,
        detalle_venta: [{
            pro_id: pro_id,
            pro_cantidad: 4
        }]
    },
    {
        ven_tipo_pago: VentaTipoPago.EFECTIVO,
        usu_id: usu_id,
        detalle_venta: [{
            pro_id: pro_id,
            pro_cantidad: 5
        }]
    },
    {
        ven_tipo_pago: VentaTipoPago.EFECTIVO,
        usu_id: usu_id,
        detalle_venta: [{
            pro_id: pro_id,
            pro_cantidad: 6
        }]
    },    
    {
        ven_tipo_pago: VentaTipoPago.EFECTIVO,
        usu_id: usu_id,
        detalle_venta: [{
            pro_id: pro_id,
            pro_cantidad: 2
        }]
    }

]