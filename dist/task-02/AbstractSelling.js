"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    constructor(product, quantity) {
        this.product = product;
        this.count = quantity;
    }
    get productInfo() {
        return this.product;
    }
    set newProduct(product) {
        this.product = product;
    }
    get productQuantity() {
        return this.count;
    }
    set productQuantity(quantity) {
        this.count = quantity;
    }
    compare(product) {
        const a = product.getPrice();
        const b = this.getPrice();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        return 0;
    }
}
exports.AbstractSelling = AbstractSelling;
;
