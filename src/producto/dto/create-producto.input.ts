import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, IsPositive, IsString, Max, Min, MinLength } from 'class-validator';

@InputType()
export class CreateProductoInput {
    
  @Field( () => String )
  @IsString()
  @MinLength(1, { message: 'Ingrese como minimo 1 caracter para el nombre del producto.' })
  pro_nombre : string

  @Field( () => String )
  @IsString()
  @MinLength(1, { message: 'Ingrese como minimo 1 caracter para el nombre de la marca.' })
  pro_marca : string

  @Field( () => Float, { nullable: true, defaultValue: 0, description: 'El valor por defecto es 0.' })
  @Min(0, { message: 'El valor mínimo del precio es cero.' } )
  pro_precio : number

  @Field( () => Int )
  @IsInt()
  @Min(36, { message: 'El valor mínimo de la talla es 36.' })
  @Max(46, { message: 'El valor máximo de la talla es 46.' })
  pro_talla : number

  @Field( () => Int, { nullable: true, defaultValue: 0 })
  @IsInt({ message: 'La cantidad debe ser un número entero.' })
  @Min(0, { message: 'El valor mínimo de la cantidad es cero.' } )
  @IsOptional()
  pro_cantidad? : number

  @Field( () => Boolean, { nullable: true, defaultValue: true, description: 'El valor por defecto es TRUE.' })
  @IsBoolean()
  pro_estado : boolean

  @Field( () => String )
  @IsString()
  @MinLength(1, { message: 'Ingrese como minimo 1 caracter para el nombre de la sección.' })
  pro_seccion : string

}