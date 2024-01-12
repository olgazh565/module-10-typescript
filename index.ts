{
  // const log = <T, B>(val: T, val2: B): T => {
  //   console.log(val);
  //   return val;
  // };

  // log<string, number>('строка', 10);
  // log(5, 15);

  // тип функции
  type filterArray = <T>(arr: T[], exclude: T[]) => T[];

  const filterArr: filterArray = (arr, exclude) =>
    arr.filter(item => !exclude.includes(item));

  // const filterArr = <T>(arr: T[], exclude: T[]): T[] => 
  //   arr.filter(item => !exclude.includes(item));

  const result = filterArr<number>([1, 2, 3, 4, 5], [2, 4]);

  // Пример встроенного дженерика
  // const arr: Array<string> = ['a', 'b', 'c'];

  interface error {
    success: false;
    error: string;
  }
  interface success<T> {
    success: true;
    data: T;
  }

  // type HttpResponse<T> = {
  //   success: boolean;
  //   error?: boolean;
  //   // data?: T[];
  //   data?: T;
  // }

  type HttpResponse<T> = error | success<T>;

  interface product {
    id: number;
    title: string;
    count: number;
  }

  interface person {
    name: string;
    post: string;
  }

  const errorResponse: HttpResponse<string> = {
    success: false,
    error: 'error',
  }

  const response: HttpResponse<product[]> = {
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
  }
  const response2: HttpResponse<person[]> = {
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
  }
  const response3: HttpResponse<string> = {
    success: true,
    data: 'Заказ оформлен'
  }

}