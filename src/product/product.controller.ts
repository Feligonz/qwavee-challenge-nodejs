import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('nombre') nombre?: string,
    @Query('minPrecio') minPrecio?: number,
    @Query('maxPrecio') maxPrecio?: number,
  ) {
    limit = limit > 100 ? 100 : limit;
    const [data, total] = await this.productService.findAll(page, limit, nombre, minPrecio, maxPrecio);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
