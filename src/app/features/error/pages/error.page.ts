import { Component } from '@angular/core';
import {ErrorComponent} from '../components/error-component/error-component';

@Component({
  selector: 'app-error.page',
  imports: [
    ErrorComponent
  ],
  template: `
    <main>
      <app-error-component></app-error-component>
    </main>
  `,
  styles: ``
})
export class ErrorPage {

}
