import { IsNumber, Min } from 'class-validator';

export class ProductRatingDto {
  @IsNumber()
  @Min(0)
  rate: number;

  @IsNumber()
  @Min(0)
  count: number;
}
