import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  product() {
    return this.productService.product();
  }

  @Post()
  addProduct(@Body() productAddDto: CreateProductDto) {
    console.log(productAddDto);
    return this.productService.addProduct(productAddDto);
  }
}
