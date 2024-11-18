import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Talla {

    @Field( () => Int )
    numero: number
}