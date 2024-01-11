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
      age: 24,
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
      name: 'Екатерина Попова',
      age: 24,
      group: 'дизайнер сайтов'
    },
    {
      type: 'admin',
      name: 'Аркадий Паравозов',
      age: 55,
      role: 'Системный администратор'
    },
    {
      type: 'user',
      name: 'Даня Поперечный',
      age: 28,
      group: 'Комик'
    },
    {
      type: 'admin',
      name: 'Олег',
      age: 44,
      role: 'Модератор'
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

  const isAdmin = (person: Person): person is Admin => person.type === 'admin';
  const isUser = (person: Person): person is User => person.type === 'user';

  const logPerson = (person: Person) => {
    let information = '';

    if (isAdmin(person)) {
      information = person.role;
    }

    if (isUser(person)) {
      information = person.group;
    }

    console.log(` - ${person.name}, ${person.age}, ${information}`);
  }

  const filterUsers = (persons: Person[], criteria: Partial<Person>): Person[] =>
    persons.filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof Person)[];
        return criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]);
      });

  console.log('Persons of age 24:');

  filterUsers(
    persons,
    {
      age: 24,
    }
  ).forEach(logPerson);

}