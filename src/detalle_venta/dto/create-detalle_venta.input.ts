import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsBoolean, Min, MinLength } from 'class-validator';

@InputType()
export class CreateDetalleVentaInput {
  
  // @Field( () => ID )
  // @MinLength(1)
  // ven_id: string

  @Field( () => ID )
  @MinLength(1)
  pro_id : string

  @Field( () => Int)
  @Min(1)
  pro_cantidad : number

  @Field( () => Boolean, { nullable: true, defaultValue: true, description: 'El valor por defecto es TRUE.' })
  @IsBoolean()
  det_estado : boolean

}