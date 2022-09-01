import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {
  private products: { name: string; category: string }[] = [];

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async product(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async addProduct({ name, category }) {
    const newProduct = new Product();
    newProduct.category = category;
    newProduct.name = name;
    newProduct.id = uuid();
    return await this.productRepository.save(newProduct);
  }
}
