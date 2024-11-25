import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Min, MinLength } from 'class-validator';

@InputType()
export class CreateDetalleVentaInput {

  @Field( () => ID )
  @MinLength(1)
  pro_id : string

  @Field( () => Int)
  @Min(1)
  pro_cantidad : number

}