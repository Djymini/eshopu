import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {DiscountPipe} from '../../pipes/discount/discount-pipe';

@Component({
  selector: 'app-price-indicator',
  imports: [
    NgStyle,
    DiscountPipe
  ],
  templateUrl: './price-indicator.html',
  styleUrl: './price-indicator.scss'
})
export class PriceIndicator {
  @Input() price: number = 0;
  @Input() discount: number = 0;
  showPriceDiscount: boolean = false;

  color : string = "rgba(0,0,0,0.54)"
  textDecoration:string = "line-through";
  display:string = "none";
  fontSize: string = "24px";

  updateShowPriceDiscount(): void{
    if (this.discount > 0){
      this.showPriceDiscount = true;
    }else {
      this.showPriceDiscount = false;
    }
  }

  ngOnInit() {
    this.updateShowPriceDiscount();

    if(this.showPriceDiscount){
      this.display = "block";
      this.color = "rgba(0,0,0,0.54)";
      this.textDecoration = "line-through";
      this.fontSize = "18px";
    }else {
      this.display = "none";
      this.color = "#4466a9";
      this.textDecoration = "none";
      this.fontSize = "24px";
    }
  }
}
