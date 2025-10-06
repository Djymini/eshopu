import { Component } from '@angular/core';
import {CarouselHomeCard} from '../components/carousel-home-card/carousel-home-card';
import {CarouselHome} from '../components/carousel-home/carousel-home';

@Component({
  selector: 'app-home.page',
  imports: [
    CarouselHome
  ],
  template: `
    <app-carousel-home></app-carousel-home>
  `,
  styles: ``
})
export class HomePage {

}
