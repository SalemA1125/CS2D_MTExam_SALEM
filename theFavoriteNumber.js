// Declare a variable to hold the favorite number
let theFavNumber = 11; // You can set this to any favorite number

// Function to prompt the user until they guess correctly
function guessFavoriteNumber() {
    let guess;
    // Loop until the user guesses the correct number
    while (guess !== theFavNumber) {
        // Prompt the user to input their guess
        guess = parseInt(prompt("Guess the favorite number:"), 25);

        // Check if the guess is too high, too low, or correct
        if (guess < theFavNumber) {
            console.log("Your guess is too low.");
        } else if (guess > theFavNumber) {
            console.log("Your guess is too high.");
        } else if (guess === theFavNumber) {
            console.log("Correct! You've guessed the favorite number.");
        } else {
            console.log("Invalid input. Please enter a number.");
        }
    }
}

// Call the function to start the guessing game
guessFavoriteNumber();
