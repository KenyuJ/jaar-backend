import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Max, Min } from 'class-validator';

@InputType()
export class CreateProductoInput {
    
  @Field( () => String )
  @IsNotEmpty()
  @IsString()
  pro_nombre : string

  @Field( () => String )
  @IsNotEmpty()
  @IsString()
  pro_marca : string

  @Field( () => Float, { nullable: true, defaultValue: 0, description: 'El valor por defecto es 0.' })
  @IsPositive()
  @Min(1)
  @IsOptional()
  pro_precio ?: number

  @Field( () => Int )
  @IsInt()
  @Min(36)
  @Max(46)
  pro_talla : number

  @Field( () => Int, { nullable: true, defaultValue: 0 })
  @IsInt()
  @Min(0)
  @IsOptional()
  pro_cantidad? : number

  @Field( () => Boolean, { nullable: true, defaultValue: true, description: 'El valor por defecto es TRUE.' })
  @IsBoolean()
  @IsOptional()
  pro_estado? : boolean

  @Field( () => String, { nullable: true })
  @IsString()
  @IsOptional()
  pro_imagen?: string

  @Field( () => String )
  @IsString()
  @IsNotEmpty()
  pro_seccion : string

}