// String
let name1 = "John";
let message = 'Hello';
let template = `Hello ${name1}`;



// Number
let integer = 42;
let float = 3.14;
let scientific = 1e5; // 100000
let infinity = Infinity;
let nan = NaN;  // Not a Number



// Boolean
let isActive = true;
let isComplete = false;



// Undefined
let undefinedVar; // undefined
let explicitlyUndefined = undefined;



// Null
let emptyValue = null;



// Symbol (ES6)
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (each symbol is unique)



// BigInt (ES2020)
let bigNumber1 = 123456789012345678901234567890n;
let bigInt = BigInt("12345678901234567890");