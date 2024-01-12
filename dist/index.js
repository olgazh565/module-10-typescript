"use strict";
{
    const filterArr = (arr, exclude) => arr.filter(item => !exclude.includes(item));
    // const filterArr = <T>(arr: T[], exclude: T[]): T[] => 
    //   arr.filter(item => !exclude.includes(item));
    const result = filterArr([1, 2, 3, 4, 5], [2, 4]);
    const errorResponse = {
        success: false,
        error: 'error',
    };
    const response = {
        success: true,
        data: [
            {
                id: 21,
                title: 'CARROT',
                count: 30,
            },
            {
                id: 45,
                title: 'CABBAGE',
                count: 50,
            },
        ],
    };
    const response2 = {
        success: true,
        data: [
            {
                name: 'Ivan',
                post: 'worker',
            },
            {
                name: 'Max',
                post: 'manager',
            },
        ],
    };
    const response3 = {
        success: true,
        data: 'Заказ оформлен'
    };
}
