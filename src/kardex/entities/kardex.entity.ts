import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { KardexTipoMovimiento } from 'src/common/enums/kardex/kardex-tipo-movimiento.enum';
import { Producto } from 'src/producto/entities/producto.entity';
import { Venta } from 'src/venta/entities/venta.entity';

@ObjectType()
@Schema()
export class Kardex extends Document {

  @Field( () => ID )
  _id: string;

  @Field( () => KardexTipoMovimiento )
  @Prop({ enum: KardexTipoMovimiento, required: true })  
  kar_tipo_movimiento : string

  @Field( () => Date )
  @Prop({ required: true })
  kar_fecha_movimiento : Date

  @Field( () => Producto, { nullable: true } )
  @Prop({ type: Types.ObjectId, ref: 'Producto' })
  producto : string

  @Field( () => Venta, { nullable: true } )
  @Prop({ type: Types.ObjectId, ref: 'Venta' })
  venta : string

}

export const kardexSchema = SchemaFactory.createForClass(Kardex)