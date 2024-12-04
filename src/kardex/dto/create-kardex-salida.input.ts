import { InputType, Field, ID } from '@nestjs/graphql';
import { IsMongoId, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateKardexSalidaInput {

  @Field( () => ID )
  @IsString()
  @MinLength(1)
  @IsMongoId()
  ven_id : string;

}
