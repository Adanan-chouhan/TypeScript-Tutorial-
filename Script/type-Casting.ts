// Type Casting =>
// In TypeScript, type casting is a way to tell the compiler to treat a variable as a specific type. It’s useful when TypeScript cannot infer the type of a variable on its own or when you’re working with dynamic data (like from APIs or user inputs), and you’re certain about the type of the data.

// TypeScript provides two ways to cast types:
// 1. Using the as keyword
// 2. Using angle brackets (< >)

// 1. Casting a Variable to a String

let input: unknown = "Hello, TypeScript";
// Telling TypeScript to treat `input` as a string
let strLength: number = (input as string).length;
console.log(strLength);  // Output: 17


// 2. Using Angle Brackets for Casting
let input1: unknown = "Type Casting Example";
let strLength1: number = (<string>input1).length;
console.log(strLength1);  // Output: 20
