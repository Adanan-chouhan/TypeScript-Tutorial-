// InterSection Types => 
// An intersection type in TypeScript combines two or more types into one. The resulting type includes all properties from the combined types.

type A = {name : string, age : number};
type B = {age : number, salary : number};

type person = A & B; // Intersection type

const workers : person = {
name : "Adnan",
age : 21,
salary : 50000
} 

console.log(workers);  // output : { name: 'Adnan', age: 21, salary: 50000 }