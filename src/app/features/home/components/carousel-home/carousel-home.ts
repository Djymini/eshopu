import {Component, Input, OnInit} from '@angular/core';
import {Carousel} from 'primeng/carousel';
import {CarouselHomeCard} from '../carousel-home-card/carousel-home-card';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-carousel-home',
  imports: [
    Carousel,
    CarouselHomeCard
  ],
  templateUrl: './carousel-home.html',
  styleUrl: './carousel-home.scss'
})
export class CarouselHome implements OnInit {
  @Input() products: Product[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
