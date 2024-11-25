// union type =>
// In TypeScript, Union Type is a way to assign multiple types to a single variable. It is helpful when a variable needs to store different kinds of data.

let value: string | number;
value = "Hello"; // Valid
value = 42;      // Valid
// value = true; // Invalid, as boolean is not included

// 2 => Union Type with Functions
// You can use Union Type for function parameters or return types when they may need to handle multiple types.

function printValue(value: string | number): void {
    console.log(`The value is: ${value}`);
}

printValue("Adnan"); // Output: The value is: Adnan
printValue(123);     // Output: The value is: 123

// 3 => Type Narrowing
// TypeScript can determine the type of a union variable at runtime using type checks like typeof. This process is called Type Narrowing.

function displayInfo(value: string | number): void {
    if (typeof value === "string") {
        console.log(`String length: ${value.length}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

displayInfo("Adnan"); // Output: String length: 5
displayInfo(42);      // Output: Number value: 42

// 4 => Union Type in Arrays
// Union Type can also be applied to arrays when they contain elements of multiple types.

let mixedArray: (string | number)[] = ["Adnan", 25, "TypeScript", 100];
console.log(mixedArray); // Output: [ 'Adnan', 25, 'TypeScript', 100 ]

// 5 => Using Union Type with Aliases
// You can use Type Aliases with Union Types for better readability and reusability.

type ID = string | number;

function getUserId(id: ID): void {
    console.log(`User ID is: ${id}`);
}

getUserId("ABC123"); // Output: User ID is: ABC123
getUserId(98765);    // Output: User ID is: 98765
