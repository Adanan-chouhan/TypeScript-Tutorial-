// // TypeScript classes =>
// // TypeScript provides several additional features over JavaScript, including access modifiers, parameter properties, abstract classes, and interfaces.
// // Access Modifiers
// // TypeScript supports public, private, and protected access modifiers.

// // public: Default visibility, accessible from anywhere.
// // private: Only accessible within the class.
// // protected: Accessible within the class and by derived classes.

// // Inheritance
// // TypeScript supports single inheritance, allowing you to create a class that extends another class.

// // Example
class Car {
    brand: string;  // Property
    model: string;  // Property
    year: number;   // Property

    // Constructor: Initializes the object
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    // Method: Function inside the class
    getDetails(): string {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  }

  // Creating an object (instance) of the class
  let car1 = new Car("Toyota", "Corolla", 2022);
  console.log(car1.getDetails());  // Output: "Toyota Corolla (2022)"

// Example with Access Modifiers =>
class Person {
    public name: string;   // Public property
    private age: number;   // Private property

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    getAge(): number {
      return this.age;   // Accessing private property within the class
    }
  }

  let person1 = new Person("Alice", 25);
  console.log(person1.name);       // Output: Alice (public property)
  console.log(person1.getAge());   // Output: 25 (using a method to access private property)

// Inheritance (Reusing Class Functionality) =>
// Inheritance allows one class to inherit properties and methods from another class. The child class (or subclass) extends the parent class (or superclass).

class Animal {
    species: string;

    constructor(species: string) {
        this.species = species;
    }

    makeSound(): string {
        return "Some Sound";
    }
}

class Dog extends Animal{
    breed : string;

    constructor(species: string, breed : string){
        super(species);
        this.breed = breed;
    }

    makeSound(): string {
        return "Bark! Bark!";
    }
}

let dog1 = new Dog("Canine","Labrador");
console.log(dog1.makeSound()); // Output: "Bark! Bark!"

// Abstract Classes =>
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }