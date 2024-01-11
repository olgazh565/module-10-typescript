{
  interface User {
    type: 'user';
    name: string;
    age: number;
    group: string;
  }

  interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
  }

  type Person = User | Admin;

  const persons: Person[] = [
    {
      type: 'admin',
      name: 'Иван Петров',
      age: 27,
      role: 'Администратор',
    },
    {
      type: 'user',
      name: 'Марат Aляуддинов',
      age: 20,
      group: 'музыкант',
    },
    {
      type: 'user',
      name: 'Брат Алексей',
      age: 32,
      group: 'Семья',
    },
    {
      type: 'user',
      name: 'Регина',
      age: 35,
      group: 'Друзья',
    },
    {
      type: 'admin',
      name: 'Том Круз',
      age: 50,
      role: 'Администратор',
    },
  ];

  const isAdmin = (person: Person): person is Admin => {
    return person.type === 'admin';
  };

  const isUser = (person: Person): person is User => {
    return person.type === 'user';
  };

  const logPerson = (person: Person) => {
    let information: string = '';

    if (isAdmin(person)) {
      information = person.role;
    }

    if (isUser(person)) {
      information = person.group;
    }

    console.log(` - ${person.name}, ${person.age}, ${information}`);
  };

  console.log('Admins:');
  persons.filter(isAdmin).forEach(logPerson);

  console.log();

  console.log('Users:');
  persons.filter(isUser).forEach(logPerson);
}