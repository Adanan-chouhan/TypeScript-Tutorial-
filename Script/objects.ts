// // Objects in TypeScript
// // In TypeScript, an object is a collection of key-value pairs, where each key is a string (or symbol) and its value can be of any type. Objects allow you to structure data in a more meaningful way and provide flexibility to model real-world entities like a Person, Car, Product, etc.
// // TypeScript enhances objects by allowing you to define specific types for the keys and their values, ensuring better type safety and reducing errors.

// // Syntax (Structure)
// // let objectName: { key1: type1, key2: type2, ... } = {
// //     key1: value1,
// //     key2: value2,
// //     ...
// // };

// // 1 => Basic Object
// let person1 : {name : string, age : number} = {
//     name : "Adnan",
//     age  : 21,
// }

// console.log(person1.name); // Output: Adnan
// console.log(person1.age);  // Output: 21


// // 2. Optional Properties
// // You can make a property optional by adding a ? after the key.
// let car : {brand : string, modal? : string} = {
//       brand : "Toyota"
// }

// car.modal = "2022";
// console.log(car.brand);
// console.log(car.modal); // Output: 2022

// // 3 => Readonly Properties
// // Use readonly to prevent modification of a property after it's initialized.

// let person2 : {readonly id : number, name : string} = {
//     id : 1,
//     name : "Arbaaz",
// }

// // person2.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// person2.name = "Alias"
// console.log(person2.id);
// console.log(person2.name);

// // 4 => Index Signatures
// // To define objects with unknown keys, use an index signature.

// let inventory: { [key: string]: number } = {
//     apple: 10,
//     mango: 5
// };

// inventory.banana = 20; // Allowed
// console.log(inventory); // Output: { apple: 10, mango: 5, banana: 20 }

// // 5 => Nested Objects
// // An object can contain another object.

// let student : {name : string, marks : {math : number, science : number}} = {
//     name : "suzy",
//     marks : {
//         math : 95,
//         science : 88
//     }
// }


// console.log(student.marks.math);    // Output: 95
// console.log(student.marks.science); // Output: 88