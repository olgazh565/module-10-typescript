"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedDiscountSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FixedDiscountSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
        this.totalPrice = this.getPrice();
    }
    getPrice() {
        return +((this.product.productPrice - 10) * this.count).toFixed();
    }
}
exports.FixedDiscountSelling = FixedDiscountSelling;
;
