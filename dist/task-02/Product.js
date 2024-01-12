"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get productPrice() {
        return this.price;
    }
    set productPrice(price) {
        this.price = price;
    }
    get productTitle() {
        return this.title;
    }
    set productTitle(title) {
        this.title = title;
    }
}
exports.Product = Product;
