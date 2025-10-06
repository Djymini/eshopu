import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalProductPipe'
})
export class TotalProductPipe implements PipeTransform {
  transform(value: number, arrayProduct: any[]): number {
    arrayProduct.map((product) => {
      value += product.stockNumber;
    })
    return value;
  }
}
