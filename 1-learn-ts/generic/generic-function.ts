// Simple generic function
function identity<T>(value: T): T {
    return value;
}

// Usage - TypeScript infers the type
const numberResult = identity(42);        // T is number
const stringResult = identity("hello");   // T is string
const arrayResult = identity([1, 2, 3]);  // T is number[]