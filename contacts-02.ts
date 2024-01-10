{
  type User = {
    name: string;
    age: number;
    group: string;
  };

  type Admin = {
    name: string;
    age: number;
    role: string;
  };

  type Person = User | Admin;

  const persons: Person[] = [
    {
      name: 'Иван Петров',
      age: 27,
      group: 'SEO-специалист',
      role: 'Администратор'
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
      role: 'Администратор',
    },
  ];

  const logPerson = (user: Person) => {
    console.log(`${user.name}, ${user.age}`);
  }

  persons.forEach(logPerson);
}

