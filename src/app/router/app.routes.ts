import { Routes } from '@angular/router';
import {HomePage} from '../features/home/pages/home.page';
import {homeResolver} from './resolvers/home-resolver';
import {ProductsPage} from '../features/product/pages/products.page';
import {productsResolver} from './resolvers/products-resolver';

export const routes: Routes = [
  {path: "", component: HomePage, resolve: {products: homeResolver}},
  {path: "products", component: ProductsPage, resolve: {products: productsResolver}}
];
