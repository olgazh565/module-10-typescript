{
  enum StatusStudent {
    enrollee = 'enrollee',
    student = 'student',
    gratuate = 'gratuate',
    bachelor = 'bachelor',
  }

  class Person {
    age?: number;
    id: string = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
    private createAt: Date = new Date();
    protected updateAt?: Date;

    constructor(name: string);
    constructor(name: string, age: number | undefined);
    constructor(public readonly name: string, age?: number | undefined) {
      if (typeof age === 'number') {
        this.age = age;
      }
    };

    getInfo(): string {
      if (this.age) {
        return `${this.name}, возраст ${this.age}`;
      }
      return this.name;
    }
  };

  class Student extends Person {
    static readonly school = 'METHED';
    static count: number;
    status: StatusStudent = StatusStudent.enrollee;
    course?: string;
    _module?: number = 0;

    // перегрузка
    constructor(name: string);
    constructor(name: string, course: string);
    constructor(name: string, age: number);
    constructor(name: string, course: string, age: number);

    constructor(public readonly name: string, courseOrAge?: string | number, age?: number) {

      let ageOrUndefined: number | undefined;

      if (typeof courseOrAge === 'number') {
        ageOrUndefined = courseOrAge;
      }
      if (age) {
        ageOrUndefined = age;
      }
      super(name, ageOrUndefined);

      if (typeof courseOrAge === 'string') {
        this.course = courseOrAge;
        this.changeStatus(StatusStudent.student);
      }

      Student.count++
    }
    private changeUpdateDate(): void {
      this.updateAt = new Date();
    }

    set module(module: number) {
      this._module = module;
      this.changeUpdateDate();
    }

    changeStatus(status: StatusStudent): void {
      this.status = status;
      this.changeUpdateDate();
    }

    changeInfo(course: string): void;
    changeInfo(module: number): void;
    changeInfo(course: string, module: number): void;
    changeInfo(courseOrModule: string | number, module?: number): void {
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

    override getInfo(): string {
      const info = super.getInfo();
      if (this.course) {
        return `${info}, учится на курсе ${this.course}`;
      }
      return info;
    }

    static createStudents(list: string[], course: string): Student[] {
      return list.map(name => new Student(name, course));
    }

    static {
      Student.count = 0;
    }

    static createStudentFromPerson(person: Person): Student;
    static createStudentFromPerson(person: Person, course: string): Student;

    static createStudentFromPerson(person: Person, course?: string): Student {
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
  };

  const students = Student.createStudents(['Ben', 'Bob', 'John'], 'React');
  console.log('students: ', students);

  const person: Person = new Person('Peter', 65);
  console.log('person: ', person);
  console.log('person.getInfo();: ', person.getInfo());

  const studentPeter: Student = Student.createStudentFromPerson(person, 'Design');
  console.log('studentPeter: ', studentPeter);


  const student1: Student = new Student('Fred', 54);
  // console.log('student: ', student.getInfo());
  // console.log('student: ', student.info);
  // student.module = 2;  
  student1.changeInfo('JS', 4);
  console.log('student1: ', student1);
  console.log('student1.getInfo();: ', student1.getInfo());


  const student2: Student = new Student('Tom', 'Frontend');
  student2.changeInfo('Web');
  console.log('student2: ', student2);

  const student3: Student = new Student('Arthur', 18);
  student3.changeInfo(2);
  console.log('student3: ', student3);

  const student4: Student = new Student('Gorge', 'JS', 28);
  student4.changeInfo('TS', 3);
  console.log('student4: ', student4);

  console.log('Student.count:', Student.count);

}

