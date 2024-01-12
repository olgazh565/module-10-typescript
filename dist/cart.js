"use strict";
{
    const getCountGoods = (arr, title) => {
        var _a;
        const goods = arr.find(item => item.title === title);
        return (_a = goods === null || goods === void 0 ? void 0 : goods.count) !== null && _a !== void 0 ? _a : 0;
    };
    const goods = [
        {
            title: 'Ноутбук',
            count: 10,
        },
        {
            title: 'Планшет',
            count: 15,
        },
        {
            title: 'Смартфон',
            count: 20,
        },
    ];
    const getCountP = getCountGoods(goods, 'Планшет');
    console.log('getCountP: ', getCountP);
    const getCountS = getCountGoods(goods, 'Смартфон');
    console.log('getCountS: ', getCountS);
}
