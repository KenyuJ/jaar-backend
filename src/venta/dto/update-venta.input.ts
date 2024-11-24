import { Field, ID, InputType, PartialType } from "@nestjs/graphql";
import { CreateVentaInput } from "./create-venta.input";

@InputType()
export class UpdateVentaInput extends PartialType(CreateVentaInput) {

    @Field( () => ID)
    _id : string
}
  