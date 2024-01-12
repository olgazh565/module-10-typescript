export class Product {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  get productPrice() {
    return this.price;
  }

  set productPrice(price: number) {
    this.price = price;
  }

  get productTitle() {
    return this.title;
  }

  set productTitle(title: string) {
    this.title = title;
  }
}