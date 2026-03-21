import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ProductRatingDto } from './product-rating.dto';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @MinLength(10)
  description: string;

  @IsString()
  @MinLength(2)
  category: string;

  @IsString()
  image: string;

  @ValidateNested()
  @Type(() => ProductRatingDto)
  rating: ProductRatingDto;
}
