{
  interface User {
    id: number;
    firstname: string;
    surname: string;
    age: number;
  };

  abstract class Users<T extends User> {
    userList: T[] = [];

    add(user: T): void {
      this.userList.push(user);
    }

    remove(id: number): boolean {
      const index: number = this.userList.findIndex(user => user.id === id);

      if (index >= 0) {
        this.userList.splice(index, 1);
        return true;
      }

      return false;
    }

    get(id: number): T | null {
      return this.userList.find(user => user.id === id) ?? null;
    }

    sorted(sortType: string = 'up'): T[] {
      if (sortType === 'down') {
        return this.userList.sort((a: T, b: T): number => 
          a.firstname > b.firstname ? -1 : 1);
      }
      
      return this.userList.sort((a: T, b: T): number => 
        a.firstname > b.firstname ? 1 : -1);
    }
  };

  interface Student {
    id: number;
    firstname: string;
    surname: string;
    age: number;
    year: number;
    specialty: string;
  };

  class Students extends Users<Student> {};

  interface Employee {
    id: number;
    firstname: string;
    surname: string;
    age: number;
    post: string;
  };

  class Employees extends Users<Employee> {};

  const studends = new Students();

  studends.add({
    id: 6789,
    firstname: 'Вася',
    surname: 'Иванов',
    age: 19,
    year: 2,
    specialty: 'Экономика'
  });
  studends.add({
    id: 8595,
    firstname: 'Костя',
    surname: 'Зайцев',
    age: 21,
    year: 5,
    specialty: 'Финансы'
  });
  studends.add({
    id: 6221,
    firstname: 'Анна',
    surname: 'Петрова',
    age: 17,
    year: 1,
    specialty: 'Правоведение'
  });
  studends.add({
    id: 9613,
    firstname: 'Семен',
    surname: 'Слепаков',
    age: 20,
    year: 3,
    specialty: 'Искусствоведение'
  });
  studends.add({
    id: 1780,
    firstname: 'Егор',
    surname: 'Бероев',
    age: 22,
    year: 5,
    specialty: 'Банковское дело'
  });

  const employees = new Employees();

  employees.add({
    id: 4634,
    firstname: 'Петр',
    surname: 'Козлов',
    age: 45,
    post: 'Разработчик',
  });
  employees.add({
    id: 8557,
    firstname: 'Ксения',
    surname: 'Орлова',
    age: 35,
    post: 'Дизайнер',
  });

  console.log('Сотрудники: ', employees.userList.length);
  console.log(employees.userList);

  console.log('Студенты: ', studends.userList.length);
  console.log(studends.userList);

  console.log('Сортировка по возрастанию, студенты: ', studends.sorted());
  console.log('Сортировка по убыванию, студенты: ', studends.sorted('down'));
}