import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsMongoId, IsString, Min, MinLength } from 'class-validator';

@InputType()
export class CreateDetalleVentaInput {

  @Field( () => ID )
  @IsString()
  @MinLength(1)
  @IsMongoId()
  pro_id : string

  @Field( () => Int)
  @Min(1)
  pro_cantidad : number

}