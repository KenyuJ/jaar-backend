import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { isValidObjectId } from "mongoose";

export class PipeMongoID implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata)
    {
        if(!isValidObjectId(value)) throw new BadRequestException(`${value} no es un ID válido de MongoDB`)
            
        return value
    }
}