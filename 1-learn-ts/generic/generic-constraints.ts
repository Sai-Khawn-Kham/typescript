// Constraint: T must have length property
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("hello");     // Works - string has length
logLength([1, 2, 3]);   // Works - array has length
// logLength(42);       // Error - number has no length