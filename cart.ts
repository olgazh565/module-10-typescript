{
  interface Goods {
    title: string;
    count: number;
  }

  const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
    const goods = arr.find(item => item.title === title);
    return goods?.count ?? 0;
  }

  const goods: Goods[] = [
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
  ]

  const getCountP = getCountGoods(goods, 'Планшет');
  console.log('getCountP: ', getCountP);
  const getCountS = getCountGoods(goods, 'Смартфон');
  console.log('getCountS: ', getCountS);
}