import { ResolveFn } from '@angular/router';
import {ProductService} from '../../features/product/services/product-service';
import {inject} from '@angular/core';

export const homeResolver: ResolveFn<Product[]> = (route, state) => {
  const productService = inject(ProductService);
  console.log(productService.getProducts());
  return productService.getProducts();
};
