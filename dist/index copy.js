"use strict";
{
    let StatusStudent;
    (function (StatusStudent) {
        StatusStudent["enrollee"] = "enrollee";
        StatusStudent["student"] = "student";
        StatusStudent["gratuate"] = "gratuate";
        StatusStudent["bachelor"] = "bachelor";
    })(StatusStudent || (StatusStudent = {}));
    class Person {
        constructor(name, age) {
            this.name = name;
            this.id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
            this.createAt = new Date();
            if (typeof age === 'number') {
                this.age = age;
            }
        }
        ;
        getInfo() {
            if (this.age) {
                return `${this.name}, возраст ${this.age}`;
            }
            return this.name;
        }
    }
    ;
    class Student extends Person {
        constructor(name, courseOrAge, age) {
            let ageOrUndefined;
            if (typeof courseOrAge === 'number') {
                ageOrUndefined = courseOrAge;
            }
            if (age) {
                ageOrUndefined = age;
            }
            super(name, ageOrUndefined);
            this.name = name;
            this.status = StatusStudent.enrollee;
            this._module = 0;
            if (typeof courseOrAge === 'string') {
                this.course = courseOrAge;
                this.changeStatus(StatusStudent.student);
            }
            Student.count++;
        }
        changeUpdateDate() {
            this.updateAt = new Date();
        }
        set module(module) {
            this._module = module;
            this.changeUpdateDate();
        }
        changeStatus(status) {
            this.status = status;
            this.changeUpdateDate();
        }
        changeInfo(courseOrModule, module) {
            if (typeof courseOrModule === 'string') {
                this.course = courseOrModule;
            }
            if (typeof courseOrModule === 'number') {
                this.module = courseOrModule;
            }
            if (module) {
                this.module = module;
            }
            this.changeUpdateDate();
        }
        getInfo() {
            const info = super.getInfo();
            if (this.course) {
                return `${info}, учится на курсе ${this.course}`;
            }
            return info;
        }
        static createStudents(list, course) {
            return list.map(name => new Student(name, course));
        }
        static createStudentFromPerson(person, course) {
            if (person.age) {
                if (course) {
                    return new Student(person.name, course, person.age);
                }
                return new Student(person.name, person.age);
            }
            if (course) {
                return new Student(person.name, course);
            }
            return new Student(person.name);
        }
    }
    Student.school = 'METHED';
    (() => {
        Student.count = 0;
    })();
    ;
    const students = Student.createStudents(['Ben', 'Bob', 'John'], 'React');
    console.log('students: ', students);
    const person = new Person('Peter', 65);
    console.log('person: ', person);
    console.log('person.getInfo();: ', person.getInfo());
    const studentPeter = Student.createStudentFromPerson(person, 'Design');
    console.log('studentPeter: ', studentPeter);
    const student1 = new Student('Fred', 54);
    // console.log('student: ', student.getInfo());
    // console.log('student: ', student.info);
    // student.module = 2;  
    student1.changeInfo('JS', 4);
    console.log('student1: ', student1);
    console.log('student1.getInfo();: ', student1.getInfo());
    const student2 = new Student('Tom', 'Frontend');
    student2.changeInfo('Web');
    console.log('student2: ', student2);
    const student3 = new Student('Arthur', 18);
    student3.changeInfo(2);
    console.log('student3: ', student3);
    const student4 = new Student('Gorge', 'JS', 28);
    student4.changeInfo('TS', 3);
    console.log('student4: ', student4);
    console.log('Student.count:', Student.count);
}
