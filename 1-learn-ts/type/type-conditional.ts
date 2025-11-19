// Basic conditional
type IsString<T> = T extends string ? true : false;
type A = IsString<string>;  // true
type B = IsString<number>;  // false
// uses ternary syntax with extends



// Infer keyword
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
// 'infer' captures type in conditional branch



// Distributed conditionals
type ToArray<T> = T extends any ? T[] : never;
type StringsOrNumbers = ToArray<string | number>; // string[] | number[]
// distributes over union types