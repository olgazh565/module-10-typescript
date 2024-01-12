{
  class Job {
    private role: string;
    private salary: number;

    constructor(role: string, salary: number) {
      this.role = role;
      this.salary = salary;
    }

    get salaryInfo() {
      return this.salary;
    }

    work(personName: string) {
      console.log(`${personName} сейчас работает как ${this.role}`);
    }
  };

  class Person {
    private name: string;
    private job: Job;

    constructor(name: string, job: Job) {
      this.name = name;
      this.job = job;
    }

    set newJob(newJob: Job) {
      this.job = newJob;
    }

    getSalary(): number {
      return this.job.salaryInfo;
    }

    work(): void {
      this.job.work(this.name);
    }
  } 

  const manager: Job = new Job('менеджер', 100_000);
  const designer: Job = new Job('дизайнер', 90_000);

  const Alex: Person = new Person('Алекс', manager);
  console.log('Alex: ', Alex);
  Alex.work();

  const Maria: Person = new Person('Мария', designer);
  console.log('Maria: ', Maria);
  console.log('Marias salary: ', Maria.getSalary());
  Maria.work();

  Maria.newJob = manager;
  Maria.work();

}

