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
