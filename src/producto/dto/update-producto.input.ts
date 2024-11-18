import { CreateProductoInput } from './create-producto.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductoInput extends PartialType(CreateProductoInput) {

  @Field(() => ID)
  _id: string;

}