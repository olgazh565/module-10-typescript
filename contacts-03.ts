{
  interface User {
    name: string;
    age: number;
    group: string;
  };

  interface Admin {
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
    const extraInfo = 'role' in user ? user.role : user.group;

    console.log(`${user.name}, ${user.age}, ${extraInfo}`);
  }

  persons.forEach(logPerson);

}

