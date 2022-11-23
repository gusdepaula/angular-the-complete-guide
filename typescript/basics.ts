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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Gustavo",
  age: 39,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type Inference
let course: string | number = "React - The complete guide";

course = 1234;
