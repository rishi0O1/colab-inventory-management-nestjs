import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  product() {
    return this.productService.product();
  }

  @Post()
  addProduct(@Body() productAddDto: CreateProductDto) {
    console.log(productAddDto);
    return this.productService.addProduct(productAddDto);
  }
}
