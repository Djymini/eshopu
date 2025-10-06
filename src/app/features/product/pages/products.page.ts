import {Component, Input, OnInit} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products.page',
  imports: [
    ProductList
  ],
  template: `
    <main>
      <h2>Nos produits</h2>
      <app-product-list [products]="products"></app-product-list>
    </main>
  `,
  styles: ``
})
export class ProductsPage implements OnInit {
  @Input() products: Product[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }
}
