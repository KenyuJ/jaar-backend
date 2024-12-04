import { InputType, Field, ID } from '@nestjs/graphql';
import { IsMongoId, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateKardexEntradaInput {

  @Field( () => ID )
  @IsString()
  @MinLength(1)
  @IsMongoId()
  pro_id : string

}
