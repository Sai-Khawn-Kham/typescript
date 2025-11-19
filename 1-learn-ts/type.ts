// typeof Operator
console.log(typeof "hello");        // string
console.log(typeof 42);             // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object (historical bug)
console.log(typeof Symbol());       // symbol
console.log(typeof 123n);           // bigint
console.log(typeof {});             // object
console.log(typeof []);             // object
console.log(typeof function(){});   // function



// Better Type Checking
Array.isArray([]);  // true

// let value = null;
// console.log(value === null);  // true

[] instanceof Array;  // true
new Date() instanceof Date; // true



// Type Conversion
String(123);      // "123"
Number("42");     // 42
Number("hello");  // NaN
Boolean(0);       // false
Boolean(1);       // true