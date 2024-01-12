"use strict";
class Cart {
    constructor() {
        this.goods = [];
    }
    add(item) {
        this.goods.push(item);
    }
    get(title) {
        var _a;
        return (_a = this.goods.find(item => item.title === title)) !== null && _a !== void 0 ? _a : null;
    }
    get totalPrice() {
        return this.goods.reduce((acc, item) => acc + (item.price * item.count), 0);
    }
}
class TechCart extends Cart {
}
;
const techCart = new TechCart();
techCart.add({
    title: "Смартфон Xiaomi 11T 8/128GB",
    price: 27000,
    description: "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. ",
    type: "mobile-phone",
    count: 3,
});
techCart.add({
    title: "Радиоуправляемый автомобиль Cheetan",
    price: 4000,
    description: "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    type: "toys",
    count: 10,
});
techCart.add({
    title: "ТВ приставка MECOOL KI",
    price: 12400,
    description: "Всего лишь один шаг сделает ваш телевизор умным",
    type: "tv-box",
    count: 5,
});
console.log(techCart.totalPrice);
console.log(techCart.get('Радиоуправляемый автомобиль Cheetan'));
