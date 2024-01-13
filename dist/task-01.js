"use strict";
{
    ;
    class Users {
        constructor() {
            this.userList = [];
        }
        add(user) {
            this.userList.push(user);
        }
        remove(id) {
            const index = this.userList.findIndex(user => user.id === id);
            if (index >= 0) {
                this.userList.splice(index, 1);
                return true;
            }
            return false;
        }
        get(id) {
            var _a;
            return (_a = this.userList.find(user => user.id === id)) !== null && _a !== void 0 ? _a : null;
        }
    }
    ;
    ;
    class Students extends Users {
    }
    ;
    ;
    class Employees extends Users {
    }
    ;
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
    studends.remove(6789);
    console.log('Студенты: ', studends.userList.length);
    console.log(studends.userList);
    const student = studends.get(6221);
    console.log('student: ', student);
}
