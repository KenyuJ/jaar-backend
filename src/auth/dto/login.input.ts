import { Field, InputType } from "@nestjs/graphql";
import { IsString, MinLength } from "class-validator";

@InputType()
export class LoginInput {

    @Field( () => String)
    @IsString()
    @MinLength(1)
    username: string

    @Field( () => String)
    @IsString()
    @MinLength(1)
    password: string
    
}