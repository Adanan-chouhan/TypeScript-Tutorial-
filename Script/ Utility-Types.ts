// Utility Types => 
// In TypeScript, Utility Types are built-in types that help you perform common transformations or operations on existing types. These types are particularly useful for simplifying repetitive tasks, modifying types, or making your code more concise and reusable.

// Common Utility Types in TypeScript

// 1. Partial<Type>
// Converts all properties of a type to optional.
// Useful when you need a temporary or incomplete version of a type.

interface User {
    name: string;
    age: number;
    email: string;
  }
  
  let user: Partial<User> = {
    name: "Adnan", // `age` and `email` are optional
  };
  
  console.log(user); // { name: 'Adnan' }

//   2. Required<Type>
// Converts all properties of a type to required.
// Useful for ensuring all properties are provided.

interface User1 {
    name?: string;
    age?: number;
  }
  
  let user1: Required<User1> = {
    name: "Adnan", // Now all properties are required
    age: 21,
  };
  
  console.log(user1); // { name: 'Adnan', age: 21 }

//   3. Readonly<Type>
// Makes all properties of a type readonly.
// You can assign values during initialization, but modifying them later will result in an error.

interface User2 {
    name: string;
    age: number;
  }
  
  let user2: Readonly<User2> = {
    name: "Adnan",
    age: 21,
  };
  
//   user2.age = 22; // Error: Property 'age' is readonly
console.log(user2);
  
// 4. Pick<Type, Keys>
// Creates a subset of a type by selecting specific properties.

interface User3 {
    name: string;
    age: number;
    email: string;
  }
  
  let user3: Pick<User3, "name" | "email"> = {
    name: "Adnan",
    email: "adnan@example.com",
  };

  console.log(user3); // { name: 'Adnan', email: 'adnan@example.com' }

//   5. Omit<Type, Keys>
// Creates a subset of a type by removing specific properties.

interface User4 {
    name: string;
    age: number;
    email: string;
  }
  
  let user4: Omit<User4, "email"> = {
    name: "Adnan",
    age: 21,
  };
  
  console.log(user4); // { name: 'Adnan', age: 21 }

// 6. Record<Keys, Type>
// Creates an object type with specified keys and a single value type.

let userRoles: Record<string, string> = {
    admin: "Adnan",
    editor: "Ali",
  };
  
  console.log(userRoles); // { admin: 'Adnan', editor: 'Ali' }

// 7. Exclude<Type, ExcludedUnion>
// Excludes specific types from a union type.

type MyType = Exclude<"a" | "b" | "c", "a">;
// Result: "b" | "c"

// 8. Extract<Type, Union>
// Extracts specific types from a union type.

type MyType1 = Extract<"a" | "b" | "c", "a" | "b">;
// Result: "a" | "b"

// 9. NonNullable<Type>
// Removes null and undefined from a type.

type MyType2 = NonNullable<string | number | null | undefined>;
// Result: string | number

// 10. ReturnType<Type>
// Extracts the return type of a function.

function greets(): string {
    return "Hello";
  }
  
  type GreetReturnType = ReturnType<typeof greets>;
  // Result: string
  