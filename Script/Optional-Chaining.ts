// Optional Chaining Operator (?.) => 
// In TypeScript, the Optional Chaining Operator (?.) is a feature that allows you to safely access properties or call methods on objects that might be null or undefined, without throwing an error.

const customer = { name: "Alice", address: { city: "New York" } };

// Using optional chaining to safely access 'city'
const city = customer?.address?.city; // "New York"
// const zipCode = customer?.address?.zipCode; // undefined (no error)

console.log(city); // "New York"
// console.log(zipCode); // undefined

// Calling Methods
const obj = {greet : () => "Hello"};
const greeting = obj?.greet?.();
console.log(greeting);  // Output: "Hello"

// Using with Arrays
const arr = [1, 2, 3];

// Accessing an element safely
const element = arr?.[5]; // undefined
console.log(element); // Output: undefined

// Using with Function Calls
const someFunc = null;
// Safely calling a function
// someFunc?.(); // No error, simply returns undefined
