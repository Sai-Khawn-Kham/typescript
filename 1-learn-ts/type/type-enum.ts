// Numeric enum
enum Color { Red, Green, Blue } // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
let color: Color = Color.Green;
console.log(color); // 1
console.log(Color[1]);  // Green


// String enum
enum Direction { Up = "UP", Down = "DOWN" } // { Up: 'UP', Down: 'DOWN' }
let dir: Direction = Direction.Up;
console.log(dir); // UP
// console.log(Direction[0]);  // Error: string enums don't have reverse mapping.


// Const enum
const enum Size { Small, Medium, Large }
let size: Size = Size.Small;
console.log(size); // 0
// console.log(Size);  // Error: a const enum is completely removed at compile time and replace with inlined values