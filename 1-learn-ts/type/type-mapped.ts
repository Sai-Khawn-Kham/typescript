// Make all properties optional
type Optional<T> = {
  [P in keyof T]?: T[P];
};
// uses 'in' keyword to iterate over keys



// Make all properties readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
// can add or remove modifiers



// Filter properties
type StringProperties<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K]
};
// 'as' clause can filter keys