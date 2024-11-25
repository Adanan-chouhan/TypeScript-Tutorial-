// Nullable Types => 
// In TypeScript, nullable types allow you to specify that a variable can either hold a specific type or be null (or undefined in some cases). This is useful when you want to represent the absence of a value or when a value is optional.

let phoneNumber: string | null;
phoneNumber = "123-456-7890";    // Valid
phoneNumber = null;              // Valid
// phoneNumber = undefined;         // Error if not explicitly allowed
console.log(phoneNumber);

// Example with Functions
function getUserProfile(userId: number): string | null {
    if (userId === 1) {
      return "John Doe";
    } else {
      return null;  // No user found, returning null
    }
  }
  
  const profile = getUserProfile(2);  // profile is null, as user is not found
  console.log(profile);
  