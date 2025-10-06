import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product/services/product-service';
import {ProductDetails} from '../components/product-details/product-details';

@Component({
  selector: 'app-product-details.page',
  imports: [
    ProductDetails
  ],
  template: `
    <main>
      <app-product-details [product]="product"></app-product-details>
    </main>
  `,
  styles: ``
})
export default class ProductDetailsPage implements OnInit {
  product: Product = {
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
  };
  private route = inject(ActivatedRoute);
  productId = this.route.snapshot.paramMap.get('id');
  productService = inject(ProductService);

  ngOnInit() {
    if(this.productId)
      this.productService.getProductById(this.productId, (product: Product) => {
        this.product = product;
      });
  }
}
