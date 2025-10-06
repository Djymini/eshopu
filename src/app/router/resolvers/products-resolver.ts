import { ResolveFn } from '@angular/router';
import {ProductService} from '../../features/product/services/product-service';
import {inject} from '@angular/core';

export const productsResolver: ResolveFn<Product[]> = (route, state) => {
  const productService = inject(ProductService);
  return productService.getProducts();
};
