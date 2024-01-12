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
    static compare(a, b) {
        return b.getPrice() - a.getPrice();
    }
}
exports.AbstractSelling = AbstractSelling;
;
