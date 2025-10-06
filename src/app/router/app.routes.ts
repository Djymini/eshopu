import { Routes } from '@angular/router';
import {HomePage} from '../features/home/pages/home.page';
import {homeResolver} from './resolvers/home-resolver';
import {ProductsPage} from '../features/product/pages/products.page';
import {productsResolver} from './resolvers/products-resolver';
import ProductDetailsPage from '../features/product-details/pages/product-details.page';
import {productDetailsResolver} from './resolvers/product-details-resolver';
import {ErrorPage} from '../features/error/pages/error.page';

export const routes: Routes = [
  {path: "", component: HomePage, resolve: {products: homeResolver}},
  {path: "products", component: ProductsPage, resolve: {products: productsResolver}},
  {path: 'products/:id', component: ProductDetailsPage, resolve: {products: productDetailsResolver}},
  {
    path: 'product/:id',
    component: ProductDetailsPage,
    resolve: {
      product: productDetailsResolver
    }
  },
  {
    path: 'products/:id',
    loadComponent: () => import('../features/product-details/pages/product-details.page')
  },
  {path: 'error', component: ErrorPage},
  {path: '**', redirectTo: 'error' }
];
