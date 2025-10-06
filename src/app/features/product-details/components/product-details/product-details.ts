import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  @Input() product: Product = {
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
}
