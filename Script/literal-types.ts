// Literals Types
// In TypeScript, Literals allow you to restrict a variable to only specific, predefined values. This means the variable can hold only the values you define upfront and nothing else.

let drink : "Tea" | "coffee" | "juice";
drink = "Tea"; // Valid
// drink = "Water" // Error : Water not allowed
console.log(drink); // output : Tea 

// 1 => In Varaibles
type Direction = "North" | "East" | "South" | "West";

let move: Direction;
move = "North";    // Valid
// move = "Up";    // Error: "Up" is not a valid direction
console.log(move); // output : North

// 2 => In Functions:
function setStatus(status: "success" | "error" | "loading") {
    console.log(`Status is: ${status}`);
  }
  
  setStatus("success"); // Valid
//   setStatus("failed");  // Error: "failed" is not allowed
