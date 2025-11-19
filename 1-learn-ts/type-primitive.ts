// String
let name1 = "John";
let message = 'Hello';
let template = `Hello ${name1}`;

let name2: string = "John";



// Number
let integer = 42;
let float = 3.14;
let scientific = 1e5; // 100000
let infinity = Infinity;
let nan = NaN;  // Not a Number

let age: number = 30;
let decimal: number = 42.5;



// Boolean
let isActive = true;
let isComplete = false;

let bool: boolean = true;



// Undefined
let undefinedVar; // undefined
let explicitlyUndefined = undefined;

let notDefined: undefined = undefined;



// Null
let emptyValue = null;

let nothing: null = null;



// Symbol (ES6)
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (each symbol is unique)

let symbolValue: symbol = Symbol("id");



// BigInt (ES2020)
let bigNumber1 = 123456789012345678901234567890n;
let bigInt = BigInt("12345678901234567890");

let bigNumber2: bigint = 9007199254740991n;