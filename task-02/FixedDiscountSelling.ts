import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class FixedDiscountSelling extends AbstractSelling {
  totalPrice: number;

  constructor(product: Product, count: number) {
    super(product, count);
    this.totalPrice = this.getPrice();
  }

  getPrice(): number {
    return +((this.product.productPrice - 10) * this.count).toFixed();
  }
};