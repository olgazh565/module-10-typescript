"use strict";
class Job {
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    get salaryInfo() {
        return this.salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}
;
class Person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
    set newJob(newJob) {
        this.job = newJob;
    }
    getSalary() {
        return this.job.salaryInfo;
    }
    work() {
        this.job.work(this.name);
    }
}
const manager = new Job('менеджер', 100000);
const designer = new Job('дизайнер', 90000);
const Alex = new Person('Алекс', manager);
console.log('Alex: ', Alex);
Alex.work();
const Maria = new Person('Мария', designer);
console.log('Maria: ', Maria);
console.log('Marias salary: ', Maria.getSalary());
Maria.work();
Maria.newJob = manager;
Maria.work();
