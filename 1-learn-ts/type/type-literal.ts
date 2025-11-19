// String literals
let direction: "left" | "right" | "up" | "down" = "left";
// value must exactly match one of the literal strings



// Numeric literals
let status: 200 | 404 | 500 = 200;
// value must exactly match one of the literal numbers



// Boolean literals
let isTrue: true = true;
// value must be exactly true or false



// Template literal types
type Email = `${string}@${string}.${string}`;
// must match the template pattern