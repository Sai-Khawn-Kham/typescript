// Function declaration
function calculateArea(length: number, width: number): string {
    return `The area is ${length * width}`;
}
console.log(calculateArea(5, 10));   // ✅ The area is 50
// console.log(calculateArea(5, "10")); // ❌ Error: Argument of type 'string' is not assignable to 'number'
// parameters and return type must match



// Function type expression
type GreetFunction = (name: string) => string;
// Arrow syntax for type definitions



// Optional parameters
function log(message: string, prefix?: string): void {
  console.log(prefix ? `${prefix}: ${message}` : message);
}
// Optional parameters must be at the end



// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
// Must be array type, must be last parameter