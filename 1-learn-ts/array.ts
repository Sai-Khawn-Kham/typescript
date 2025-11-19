const numbers1: number[] = [1, 2, 3];
// numbers1.push("4");  // wrong argument type
numbers1.push(4);

const total1 = numbers1.reduce((sum, num) => sum+num,0);
console.log(total1); // 6