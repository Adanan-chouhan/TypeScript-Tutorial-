// any type => 
// In TypeScript, the any data type is a flexible type that allows a variable to hold any kind of value. It is useful when you don’t know what type of value a variable will have at runtime. Essentially, it disables TypeScript's strict type-checking for that particular variable and lets you assign any value to it.

// Syntax of any Type
let variableName: any;

// Example =>
let randomValue: any;

randomValue = "Hello, Adnan!";      // String
console.log(randomValue);

randomValue = 42;                   // Number
console.log(randomValue);

randomValue = true;                 // Boolean
console.log(randomValue);

randomValue = [1, 2, 3];            // Array
console.log(randomValue);

randomValue = { name: "Adnan" };    // Object
console.log(randomValue);
