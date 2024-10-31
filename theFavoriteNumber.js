let favNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let guess;
let guessCount = 0;

console.log("Welcome to the Number Guessing Game!");

while (true) {
  guess = parseInt(prompt("Guess a number between 1 and 100:"));
  guessCount++;

  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
    continue; // Go back to the beginning of the loop
  }

  if (guess < favNumber) {
    console.log("Too low! Try again.");
  } else if (guess > favNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(`Congratulations! You guessed the number in ${guessCount} tries.`);
    break; // Exit the loop
  }
}
