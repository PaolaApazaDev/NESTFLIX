import { IsString, MinLength } from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  @MinLength(1)
  titulo: string;

  @IsString()
  genero: string;

  @IsString()
  sinopsis: string;

  @IsString()
  urlPortada: string;
}
