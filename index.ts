{
  enum StatusStudent {
    enrollee = 'enrollee',
    student = 'student',
    gratuate = 'gratuate',
    bachelor = 'bachelor',
  }

  class Student {
    static readonly school  = 'METHED';
    static count: number;
    id: string = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
    // name: string;
    status: StatusStudent = StatusStudent.enrollee;
    private createAt: Date = new Date();
    private updateAt?: Date;
    course?: string;
    age?: number;
    _module?: number = 0;

    // перегрузка
    constructor(name: string);
    constructor(name: string, course: string);
    constructor(name: string, age: number);
    constructor(name: string, course: string, age: number);

    constructor(public readonly name: string, courseOrAge?: string | number, age?: number) {
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

      Student.count++
    }

    // get info(): string {
    //   return `${this.name} learns ${this.course}`;
    // }

    private changeUpdateDate(): void {
      this.updateAt = new Date();
    }

    set module(module: number) {
      this._module = module;
      // this.updateAt = new Date();
      this.changeUpdateDate();
    }

    changeStatus(status: StatusStudent): void {
      this.status = status;
      // this.updateAt = new Date();
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
      // this.updateAt = new Date();
      this.changeUpdateDate();
    }

    static createStudents(list: string[], course: string): Student[] {
      return list.map(name => new Student(name, course));
    }

    static {
      Student.count = 0;
    }
  }
  
  const students = Student.createStudents(['Ben', 'Bob', 'John'], 'React');
  console.log('students: ', students);


  const student1: Student = new Student('Fred');
  // console.log('student: ', student.getInfo());
  // console.log('student: ', student.info);
  // student.module = 2;  
  student1.changeInfo('JS', 4);
  console.log('student: ', student1);

  const student2: Student = new Student('Tom', 'Frontend');
  student2.changeInfo('Web');
  console.log('student2: ', student2);

  const student3: Student = new Student('Arthur', 18);
  student3.changeInfo(2);
  console.log('student3: ', student3);

  const student4: Student = new Student('Gorge', 'JS', 28);
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

