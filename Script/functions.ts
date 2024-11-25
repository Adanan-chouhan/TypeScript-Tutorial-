// TypeScript Functions
// A function in TypeScript is a block of reusable code that performs a specific task. TypeScript enhances functions by providing type safety, which allows you to define the types of parameters and return values. This helps in preventing errors during development and makes your code more robust and maintainable.

//  Syntax(Structure)
// function functionName(parameters: parameterType): returnType {
//     // Code to perform the task
//     return value;
// }

// Examples
// 1. Basic Function
function greet(name: string): string {
    return `Hello ${name}`;
}

console.log(greet("Adnan"));  // Output: Hello Adnan

// 2. Function Without Return Value
// Functions that do not return anything use the void type.
function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello every one")  // Output: Hello every one

// 3 => Multiple Parameters
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15

// 4 => Optional Parameters
// Parameters can be optional by adding a ? after the parameter name.

function greetName(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}!`;
    }
    return `Hello, ${name}!`;
}
console.log(greetName("Adnan"));         // Output: Hello, Adnan!
console.log(greetName("Adnan", "Mr.")); // Output: Hello, Mr. Adnan!

// 5 =>  Default Parameters
// Provide default values to parameters.
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log(multiply(5));    // Output: 5 (b's default value is 1)
console.log(multiply(5, 3)); // Output: 15

// 6 => Arrow Functions
// A shorthand way of writing functions.
const subtract = (a: number, b: number): number => {
    return a - b;
};
console.log(subtract(10, 3)); // Output: 7


