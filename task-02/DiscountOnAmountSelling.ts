import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class DiscountOnAmountSelling extends AbstractSelling {
  isDiscount: boolean;
  totalPrice: number;

  constructor(product: Product, count: number, countForDiscount: number) {
    super(product, count);
    this.isDiscount = this.count >= countForDiscount;
    this.totalPrice = this.getPrice();
  }

  getPrice(): number {
    if (this.isDiscount) {
      return +(this.product.productPrice * this.count * 0.9).toFixed(2);
    } else {
      return +(this.product.productPrice * this.count).toFixed(2);
    }    
  }
}