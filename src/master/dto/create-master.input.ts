import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

@InputType()
export class CreateMasterInput {

  @Field( () => String )
  @IsString()
  @MinLength(1, { message: 'Ingrese como mínimo 1 caracter para el nombre.' })
  mas_nombre: string;

  @Field( () => Int )
  @IsInt({ message: 'Ingrese un número entero.' })
  @IsPositive({ message: 'Ingrese un número positivo.' })
  @Min(1, { message: 'Ingrese un mayor que cero.' })
  mas_serie: number

  @Field( () => Int )
  @IsInt({ message: 'Ingrese un número entero.' })
  @IsPositive({ message: 'Ingrese un número positivo.' })
  @Min(1, { message: 'Ingrese un mayor que cero.' })
  mas_nro: number

}
