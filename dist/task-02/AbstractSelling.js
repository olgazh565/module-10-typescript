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
    compare(a) {
        if (a.getPrice() > this.getPrice())
            return 1;
        if (a.getPrice() < this.getPrice())
            return -1;
        return 0;
    }
}
exports.AbstractSelling = AbstractSelling;
;
