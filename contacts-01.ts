{
  type User = {
    name: string;
    age: number;
    group: string;
  };

  const persons: User[] = [
    {
      name: 'Иван Петров',
      age: 27,
      group: 'SEO-специалист',
    },
    {
      name: 'Марат Aляуддинов',
      age: 20,
      group: 'Музыкант',
    },
    {
      name: 'Брат Алексей',
      age: 32,
      group: 'Семья',
    },
    {
      name: 'Регина',
      age: 35,
      group: 'Друзья',
    },
    {
      name: 'Том Круз',
      age: 50,
      group: 'Актер',
    },
  ];

  const logPerson = (user: User) => {
    console.log(`${user.name}, ${user.age}`);
  }

  console.log('Users:');
  persons.forEach(logPerson);
}