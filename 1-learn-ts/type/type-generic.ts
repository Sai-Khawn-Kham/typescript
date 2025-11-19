// Generic function
function identity<T>(value: T): T {
  return value;
}
// type parameter must be used in parameters or return type



// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
}
// Type parameter must be provided when used



// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// constraints use extends keyword



// Generic classes
class Container<T> {
  constructor(public value: T) {}
}
// type parameter available throughout class