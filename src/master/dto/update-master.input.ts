import { CreateMasterInput } from './create-master.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMasterInput extends PartialType(CreateMasterInput) {

  @Field(() => ID)
  _id: string;
  
}
