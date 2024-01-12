import { AbstractSelling } from "./AbstractSelling";
import { DiscountOnAmountSelling } from "./DiscountOnAmountSelling";
import { FixedDiscountSelling } from "./FixedDiscountSelling";
import { Product } from "./Product";

let products: AbstractSelling[] = [];

const chips = new DiscountOnAmountSelling(new Product('Чипсы', 5), 10, 3);
const juice = new DiscountOnAmountSelling(new Product('Сок', 6), 3, 2);
const cookies = new DiscountOnAmountSelling(new Product('Печенье', 4), 2, 3);
const icecream = new DiscountOnAmountSelling(new Product('Мороженое', 9), 5, 3);

const lamp = new FixedDiscountSelling(new Product('Лампа', 90), 1);
const book = new FixedDiscountSelling(new Product('Книга', 50), 3);
const hoodie = new FixedDiscountSelling(new Product('Толстовка', 90), 2);
const bag = new FixedDiscountSelling(new Product('Сумка', 130), 2);

products.push(chips, juice, cookies, icecream, lamp, book, hoodie, bag);

console.log('productsNotSorted: ', products);

products.sort((a, b) => a.compare(b));

console.log('productsSorted: ', products);
