// Generic function chaining with different types
function pipe<T, U, V>(
  value: T,
  fn1: (input: T) => U,
  fn2: (input: U) => V
): V {
  return fn2(fn1(value));
}

// Usage with type inference
const result = pipe(
  "hello",                    // T = string
  (str) => str.length,        // U = number  
  (num) => num * 2           // V = number
); // result: 10