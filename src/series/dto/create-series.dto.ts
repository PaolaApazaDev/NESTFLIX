import {
  IsInt,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

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

  @IsInt()
  @Min(1800)
  @Max(3000)
  estreno: number;

  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(0)
  @Max(10)
  calificacion: number;

  @IsString()
  plataforma: string;
}
