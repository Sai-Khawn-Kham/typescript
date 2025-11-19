// Transform types based on conditions
type Nullable<T> = T | null;
type ArrayOrSingle<T> = T | T[];

// Advanced: Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : T;

// Usage examples
type Test1 = ArrayElement<number[]>;        // number
type Test2 = ArrayElement<string>;          // string
type Test3 = ArrayElement<[boolean, number]>; // boolean | number