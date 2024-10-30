// Function to determine age category
function categorizeAge(age) {
    let category; // Variable to store the category based on age

    // Check if age is less than 5 and assign "Toddler" category
    if (age < 5) {
        category = "Toddler (under 5 years)";
    } 
    // Check if age is between 5 and 12 and assign "Child" category
    else if (age >= 5 && age <= 12) {
        category = "Child (5–12 years)";
    } 
    // Check if age is between 13 and 19 and assign "Teenager" category
    else if (age >= 13 && age <= 19) {
        category = "Teenager (13–19 years)";
    } 
    // Check if age is between 20 and 35 and assign "Young Adult" category
    else if (age >= 20 && age <= 35) {
        category = "Young Adult (20–35 years)";
    } 
    // Check if age is between 36 and 60 and assign "Middle-Aged" category
    else if (age >= 36 && age <= 60) {
        category = "Middle-Aged (36–60 years)";
    } 
    // If age is over 60, assign "Senior" category
    else {
        category = "Senior (over 60 years)";
    }

    // Log the category to the console
    console.log(`The user is categorized as: ${category}`);
}

// Prompt the user to enter their age
let age = prompt("Enter your age: "); // Collects user's age as a string
age = parseInt(age); // Converts the entered age to an integer
categorizeAge(age); // Calls the function to determine the age category and log the result
