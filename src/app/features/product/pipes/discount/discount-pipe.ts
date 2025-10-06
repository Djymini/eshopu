import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPipe'
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number): number {
    let discountPrice = (price - (discount * 0.01 * price)).toFixed(2)
    return Number(discountPrice);
  }
}
