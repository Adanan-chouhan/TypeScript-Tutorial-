enum Colors {
    Red,    // 0
    Blue,   // 1
    Green   // 2
}

console.log(Colors.Red);    // 0
console.log(Colors.Blue);   // 1
console.log(Colors.Green);  // 2

// Example 2 => Custom Numeric Enum
// You can assign custom numeric values:

enum Size {
    Small = "s",
    Medium = "m",
    Large = "l"
}

console.log(Size.Small);  // "s"
console.log(Size.Large);  // "l"
console.log(Size.Medium); // "m"

// Example 3 => String Enum
// In string enums, each constant is assigned a string value:

enum Directions {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}

console.log(Directions.North); // Output: "NORTH"
console.log(Directions.South); // Output: "SOUTH"

// Example 4 => Reverse Mapping
// For numeric enums, TypeScript provides reverse mapping:

enum colors {
    Red = 1,
    Green,
    Blue
}

console.log(colors.Red);    // Output: 1
console.log(colors[1]);     // Output: "Red"

// Example 5 => Using Enums in Functions 
// Enums can be used as parameter types in functions:

enum Status {
    Pending,
    Approved,
    Rejected
}

function getStatus(status: Status) {
    if (status === Status.Approved) {
        return "Your request is approved.";
    } else if (status === Status.Rejected) {
        return "Your request is rejected.";
    }
    return "Your request is pending.";
}

console.log(getStatus(Status.Pending));  // Output: "Your request is pending."
console.log(getStatus(Status.Approved)); // Output: "Your request is approved."

// Example 6 => Heterogeneous Enum
// Enums can mix numeric and string values:

enum MixedEnum {
    Yes = "YES",
    No = 0
}

console.log(MixedEnum.Yes); // Output: "YES"
console.log(MixedEnum.No);  // Output: 0



