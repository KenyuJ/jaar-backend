import { ArgsType, Field, Int } from "@nestjs/graphql"
import { IsInt, IsOptional, Min } from "class-validator"

@ArgsType()
export class PaginationArgs {

    @Field( () => Int, { nullable: true } )
    @IsOptional()
    @IsInt()
    @Min(0)
    offset : number = 0
    
    @Field( () => Int, { nullable: true } )
    @IsOptional()
    @IsInt()
    @Min(1)
    limit : number = 10

}