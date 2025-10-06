import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {StockIndicator} from '../stock-indicator/stock-indicator';
import {PriceIndicator} from '../price-indicator/price-indicator';

@Component({
  selector: 'app-product-card',
  imports: [
    RouterLink,
    NgOptimizedImage,
    StockIndicator,
    PriceIndicator
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
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

  addToCart(): void {
    if (this.product.stockNumber > 0) {
      console.log("Ajouté au panier");
    }
  }
}
