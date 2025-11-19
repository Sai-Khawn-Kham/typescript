// Utility Types
interface User {
  name: string;
  age: number;
  email: string;
}


// Partial
// all properties optional
type PartialUser = Partial<User>;
// adds ? modifier to all properties


// Required
// all properties required
type RequiredUser = Required<User>;
// removes ? modifier from all properties


// Readonly
// all properties readonly
type ReadonlyUser = Readonly<User>;
// adds readonly modifier to all properties


// Pick
// pick specific properties
type UserName = Pick<User, "name">;
// 'name' must be keys of User


// Omit
// omit specific properties
type UserWithoutEmail = Omit<User, "email">;
// 'email' must be keys of User


// Record<K, T>
// object with specific key type and value type
type PageInfo = Record<string, { title: string }>;
// K must be string | number | symbol