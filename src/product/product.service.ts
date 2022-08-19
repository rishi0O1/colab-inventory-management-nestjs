import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products: { name: string; category: string }[] = [];

  product() {
    return this.products;
  }

  addProduct({ name, category }) {
    this.products.push({
      name,
      category,
    });
    return this.products;
  }
}
