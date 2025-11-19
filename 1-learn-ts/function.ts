function calculateArea(length: number, width: number): number {
    return length * width;
}
// console.log(calculateArea(5, "10")); // ❌ Error: Argument of type 'string' is not assignable to 'number'
console.log(calculateArea(5, 10));   // ✅ 50