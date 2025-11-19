// Create read-only versions of types
type ReadonlyRecord<K extends keyof any, T> = {
  readonly [P in K]: T;
};

// Make all properties optional and nullable
type PartialNullable<T> = {
  [P in keyof T]?: T[P] | null;
};

// Usage
type User = { id: number; name: string };
type ReadonlyUser = ReadonlyRecord<keyof User, User[keyof User]>;
type FlexibleUser = PartialNullable<User>;