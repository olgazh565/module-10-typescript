"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountOnAmountSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class DiscountOnAmountSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count, countForDiscount) {
        super(product, count);
        this.isDiscount = this.count >= countForDiscount;
        this.totalPrice = this.getPrice();
    }
    getPrice() {
        if (this.isDiscount) {
            return +(this.product.productPrice * this.count * 0.9).toFixed(2);
        }
        else {
            return +(this.product.productPrice * this.count).toFixed(2);
        }
    }
}
exports.DiscountOnAmountSelling = DiscountOnAmountSelling;
