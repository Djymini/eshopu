import { Routes } from '@angular/router';
import {HomePage} from '../features/home/pages/home.page';
import {homeResolver} from './resolvers/home-resolver';

export const routes: Routes = [
  {path: "", component: HomePage, resolve: {products: homeResolver}}
];
