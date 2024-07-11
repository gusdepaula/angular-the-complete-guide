// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// primitives
let age: number;

age = 12;

let userName: string | string[];

userName = "Gustavo";

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Gustavo",
  age: 39,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type Inference
let course: string | number = "React - The complete guide";

course = 1234;

// Functions & Types
function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

//updatedArray[0].split("");

class Student {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   courses: string[];

  constructor(
    public first: string,
    public last: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Gustavo", "de Paula", 39, ["Angular"]);
student.enrol("React");
// student.listCourses();

// studente.courses => Angular, React

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let gusta: Human;
gusta = {
  firstName: "Gustavo",
  age: 39,
  greet() {
    console.log("Hello");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hello!!!");
  }
}
