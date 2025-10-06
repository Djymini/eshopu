import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {ProductService} from '../../features/product/services/product-service';

export const productDetailsResolver: ResolveFn<Product> = (route, state) => {
  let myParam = route.data['resolvedata'];
  let product = {
    id: 0,
    imagePath: "/assets/images/placeholder-product.png",
    imageDescription: "Product image",
    bannerPath: "/assets/images/placeholder-banner-carousel.jpg8",
    bannerDescription: "Product banner description",
    title: "",
    resume: "",
    price: 0,
    discount: 0,
    stockNumber: 0,
  }

  const productService = inject(ProductService);
  productService.getProductById(myParam, (product: Product) =>{
    product = product;
  })

  return product;
};
