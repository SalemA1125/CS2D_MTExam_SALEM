let fullName = prompt("Andrea Salem):");
let age = parseInt(prompt("19:"));
let favNumber = parseInt(prompt("25:"));
let favColor = prompt("Blue:");

// Input validation (optional, but good practice):
while (isNaN(age) || age <= 0) {
  age = parseInt(prompt("Invalid age. Please enter a positive number:"));
}
while (isNaN(favNumber)) {
  favNumber = parseInt(prompt("Invalid favorite number. Please enter a number:"));
}


console.log("User Profile:");
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Favorite Number:", favNumber);
console.log("Favorite Color:", favColor);
