import { CreateDetalleVentaInput } from './create-detalle_venta.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDetalleVentaInput extends PartialType(CreateDetalleVentaInput) {
  
  @Field(() => ID , { nullable: true })
  _id: string;

}