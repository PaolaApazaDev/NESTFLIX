import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateEpisodioDto {
  @IsString()
  @MinLength(1)
  titulo: string;

  @IsNumber()
  duracion: number;

  @IsNumber()
  numeroCapitulo: number;

  @IsString()
  nombreSerie: string;
}
