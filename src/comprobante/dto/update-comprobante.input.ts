import { PartialType } from "@nestjs/graphql";
import { CreateComprobanteInput } from "./create-comprobante.input";


export class UpdateComprobanteInput extends PartialType(CreateComprobanteInput) {

}
