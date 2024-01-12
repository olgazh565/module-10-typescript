"use strict";
{
    let StatusStudent;
    (function (StatusStudent) {
        StatusStudent["enrollee"] = "enrollee";
        StatusStudent["student"] = "student";
        StatusStudent["gratuate"] = "gratuate";
        StatusStudent["bachelor"] = "bachelor";
    })(StatusStudent || (StatusStudent = {}));
    class Student {
        constructor(name, courseOrAge, age) {
            this.name = name;
            this.id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
            // name: string;
            this.status = StatusStudent.enrollee;
            this.createAt = new Date();
            this._module = 0;
            // this.name = name;
            if (typeof courseOrAge === 'string') {
                this.course = courseOrAge;
                this.changeStatus(StatusStudent.student);
            }
            if (typeof courseOrAge === 'number') {
                this.age = courseOrAge;
            }
            if (age) {
                this.age = age;
            }
            Student.count++;
        }
        // get info(): string {
        //   return `${this.name} learns ${this.course}`;
        // }
        changeUpdateDate() {
            this.updateAt = new Date();
        }
        set module(module) {
            this._module = module;
            // this.updateAt = new Date();
            this.changeUpdateDate();
        }
        changeStatus(status) {
            this.status = status;
            // this.updateAt = new Date();
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
            // this.updateAt = new Date();
            this.changeUpdateDate();
        }
        static createStudents(list, course) {
            return list.map(name => new Student(name, course));
        }
    }
    Student.school = 'METHED';
    (() => {
        Student.count = 0;
    })();
    const students = Student.createStudents(['Ben', 'Bob', 'John'], 'React');
    console.log('students: ', students);
    const student1 = new Student('Fred');
    // console.log('student: ', student.getInfo());
    // console.log('student: ', student.info);
    // student.module = 2;  
    student1.changeInfo('JS', 4);
    console.log('student: ', student1);
    const student2 = new Student('Tom', 'Frontend');
    student2.changeInfo('Web');
    console.log('student2: ', student2);
    const student3 = new Student('Arthur', 18);
    student3.changeInfo(2);
    console.log('student3: ', student3);
    const student4 = new Student('Gorge', 'JS', 28);
    student4.changeInfo('TS', 3);
    console.log('student4: ', student4);
    // setTimeout(() => {
    //   student.module = 1;
    //   student.status = StatusStudent.student;
    //   console.log('student: ', student);
    // }, 2000);
    // setTimeout(() => {
    //   student.module = 2;
    //   console.log('student: ', student);
    // }, 3000);
    // setTimeout(() => {
    //   student.module = 3;
    //   student.status = StatusStudent.gratuate;
    //   console.log('student: ', student);
    // }, 7500);
    console.log('Student.count:', Student.count);
}
