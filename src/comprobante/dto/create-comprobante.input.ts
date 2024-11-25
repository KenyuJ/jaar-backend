import { Field, ID, InputType } from "@nestjs/graphql";
import { IsString, MinLength } from "class-validator";

@InputType()
export class CreateComprobanteInput {

    @Field( () => ID ) 
    @IsString()
    @MinLength(1)
    mas_id: string;

    @Field( () => ID )
    @IsString()
    @MinLength(1)
    usu_id : string;

    @Field( () => ID )
    @IsString()
    @MinLength(1)
    ven_id: string;
   
}