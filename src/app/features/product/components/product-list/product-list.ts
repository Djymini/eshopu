import {Component, Input} from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {TotalProductPipe} from '../../pipes/total-product/total-product-pipe';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard,
    TotalProductPipe
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  numberOfProducts = 0;
  @Input() products: Product[] = [];
}
