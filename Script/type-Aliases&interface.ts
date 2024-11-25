// 1. Type Alias =>
// A Type Alias allows you to create a custom type by giving a new name to an existing type. It can be used to define the structure of objects, functions, arrays, or even union and intersection types.

type users = {
    name : string,
    age : number
}

let employee : users = {
    name : "Adnan",
    age : 21
}

console.log(employee); // output : { name: 'Adnan', age: 21 }
console.log(employee.name); // output : Adnan

// use type-Alias multiple time
let employee1 : users = {
    name : "Arbaaz",
    age : 18
}

// employee.name = "suzy" // not modify name Property
// employee.salery : number = 21000; // note add new property Error => Property 'salery' does not exist on type 'users'.
console.log(employee1); // output : { name: 'Arbaaz', age: 18 }
console.log(employee1.name); // output : Arbaaz

// Another example..
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const Usercar: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};
// console.log(Usercar)

// 2. Interface => 
// An Interface defines the shape of an object. It acts as a blueprint that specifies what properties an object must have and their types.

interface User{
    name : string,
    age : number,
}

let employee2 : User = {
    name : "Alex",
    age : 35,
}

employee2.name = "alias"; // Done
console.log(employee2.name);  // output : alias

// Example => Interface with Methods
interface Vehicle {  
    brand: string;  
    start(): void;  
  }  
  
  let myCar: Vehicle = {  
    brand: "Toyota",  
    start() {  
      console.log("Car started!");  
    }  
  };  
  
  myCar.start(); // Output: Car started!  
  


