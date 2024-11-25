// TypeScript Basic Generics
// NOTE : Generics in TypeScript help you write more reusable, flexible, and type-safe code. Instead of creating redundant variables or functions for different types, you can use generics to handle multiple types with a single implementation. This reduces code duplication, improves maintainability, and ensures type safety.// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Examples of Generics
// 1. Generic Function

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); // Output: "Hello"
console.log(identity<number>(123)); // // Output: 123

// 2. Generic Array
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

console.log(getArray<string>(["Apple", "Bananna"])); //  [ 'Apple', 'Bananna' ]
console.log(getArray<number>([1, 2, 3])); // [ 1, 2, 3 ]

// 3. Generic Class
class Box<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

let stringBox = new Box<string>("Books");
console.log(stringBox.getContent());  // Output: "Books"

let numberBox = new Box<number>(100);
console.log(numberBox.getContent());  // Output: 100
