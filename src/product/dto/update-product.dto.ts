import { IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  precio?: number;

  @IsString()
  @IsOptional()
  descripcion?: string;
}