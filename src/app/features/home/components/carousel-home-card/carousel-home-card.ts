import {Component, Input, OnInit} from '@angular/core';
import {Button, ButtonDirective, ButtonLabel} from 'primeng/button';

@Component({
  selector: 'app-carousel-home-card',
  imports: [
    ButtonDirective,
    ButtonLabel
  ],
  templateUrl: './carousel-home-card.html',
  styleUrl: './carousel-home-card.scss'
})
export class CarouselHomeCard implements OnInit {
  @Input() product: Product = {
    id: 0,
    imagePath: "/assets/images/placeholder-product.png",
    imageDescription: "Product image",
    bannerPath: "/assets/images/placeholder-product.png",
    bannerDescription: "Product description",
    title: "",
    resume: "",
    price: 0,
    discount: 0,
    stockNumber: 0,
  };

  imagePath: string = 'assets/images/placeholder-banner-carousel.jpg';
  imageDescription: string = 'Image description';
  shortPresentation: string = 'Presentation';

  ngOnInit() {
    this.imagePath = this.product.bannerPath;
    this.imageDescription = this.product.imageDescription;
    this.shortPresentation = this.product.resume;
  }
}
