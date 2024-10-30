// Create an array to store the colors the user likes
let favoriteColors = [];

// Function to prompt the user to add their favorite colors
function addFavoriteColors() {
    // Loop to get 3 colors from the user
    while (favoriteColors.length < 3) {
        // Prompt the user to enter a color
        let color = prompt("Blue:");
        
        // Add the new color to the array
        favoriteColors.push(color);

        // Print the updated array to the console
        console.log("Blue:", favoriteColors);
    }
}

// Call the function to start collecting colors
addFavoriteColors();
