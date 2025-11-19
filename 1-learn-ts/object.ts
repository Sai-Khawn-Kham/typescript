const user = {
  name: "John",
  age: 30
};
console.log(user.name); // "John"
// console.log(user.nme);  // property 'nme' doesn't exist (output: undefined in JS)



let person: {
  name: string;
  age: number
} = {
  name: "John",
  age: 30
};



let user2: {
  name: string;
  email?: string 
} = {
  name: "John" 
};



let readonly: {
  readonly key: string
} = {
  key: "abc"
};



let signatures: {
  [key: number]: string
} = {
  1: "one", 2: "two"
};