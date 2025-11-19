interface User {
    name: string;
    age: number;
    email: string;
}

function greetUser(user: User): string {
    return `Hello ${user.name}, you are ${user.age} years old!`;
}

const user1: User = {
    name: "Bob",
    age: 30,
    email: "bob@example.com"
};
console.log(greetUser(user1));

// const user2: User = {
//     name: "Alice",
//     age: "twenty"  // ❌ ERROR: Type 'string' is not assignable to type 'number'
// };

// const user3: User = {
//     name: "Charlie"  // ❌ ERROR: Missing properties 'age', 'email'
// };