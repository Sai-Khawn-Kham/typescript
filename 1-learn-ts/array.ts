const numbers1: number[] = [1, 2, 3];
// numbers1.push("4");  // wrong argument type
numbers1.push(4);

const total1 = numbers1.reduce((sum, num) => sum+num,0);
console.log(total1); // 6



let readonly: readonly number[] = [1, 2, 3];

let union: (string | number)[] = [1, "hello"];

let anyArr: any[] = [1, "b", true, { key: "value" }, [1, 2, 3]];

let arr2d: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let strings: Array<string> = ["a", "b", "c"];

let anyGeneric: Array<any> = ["a", 2, { key: "value" }, [1, 2, 3], true];

let grid: Array<Array<Array<number>>> = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9],
    [10, 11, 12]
  ]
];



// Tuple
let coordinates: [string, number, boolean?] = ["John", 25];

let readonlyTuple: readonly [string, number] = ["test", 42];

let config: [string, any, number] = ["server", { host: "localhost", port: 8080 }, 3];

let mixedStart: [string, number, ...any[]] = ["start", 2, true, null, {key: "value"}, [1, 2], "a"];