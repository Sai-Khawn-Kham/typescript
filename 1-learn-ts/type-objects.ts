// Object
let person = {
  name: "John",
  age: 30,
  isStudent: false
};

let person2: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "John",
  age: 25,
  isStudent: false
};



// Array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

let numbers2: number[] = [1, 2, 3, 4, 5];
let mixed2: any[] = [1, "hello", true, null];



// Function
function greet(a: string) {
  return `Hello ${a}`;
}

function greet2(name: string): string {
  return `Hello, ${name}`;
}

let multiply = function(a: number, b: number) {
  return a * b;
};

let multiply2 = function(a: number, b: number): number {
  return a * b;
}



// Date
let now = new Date();
let specificDate = new Date("2023-12-25");



// RegExp
let pattern = /hello/i;
let regex = new RegExp("world", "g");