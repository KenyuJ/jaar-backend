import { Field, ID, InputType } from "@nestjs/graphql";
import { IsMongoId, IsString, MinLength } from "class-validator";

@InputType()
export class CreateComprobanteInput {

    @Field( () => ID ) 
    @IsString()
    @MinLength(1)
    @IsMongoId()
    mas_id: string;

    @Field( () => ID )
    @IsString()
    @MinLength(1)
    @IsMongoId()
    usu_id : string;

    @Field( () => ID )
    @IsString()
    @MinLength(1)
    @IsMongoId()
    ven_id: string;
   
}