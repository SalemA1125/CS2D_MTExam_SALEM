// Initialize an array to store the subject values
let sub = ["DSA", "PL", "Networks"];

// Prompt the user to select a subject
let subject = prompt("Select a subject:\nA. DSA\nB. PL\nC. Networks");

// Prompt the user to select an action
let userAction = prompt("Select:\nEnroll\nUnenroll\nSelect Another Subject\nExit");

// Prompt the user to enter their name
let name = prompt("Enter your name:");

// Conditionally handle user action
if (userAction === "Enroll") {
    // Add the user's name to the array if they choose "Enroll"
    sub.push(name);
} else if (userAction === "Unenroll") {
    // Remove the last enrolled user if they choose "Unenroll"
    sub.pop();
} else if (userAction === "Select Another Subject") {
    // Prompt the user to re-select a subject if they choose "Select Another Subject"
    subject = prompt("Select a subject:\nA. DSA\nB. PL\nC. Networks");
} else if (userAction === "Exit") {
    // Exit the program if they choose "Exit"
    console.log("Exiting the program.");
} else {
    console.log("Invalid action selected.");
}

// Log the current state of the array
console.log("Current subjects and enrolled users:", sub);

// Example unenroll name to be added at the beginning
let unenroll = "Jhury-Ann Bordios";

// Add unenroll name to the beginning of the array
sub.unshift(unenroll);

// Log the updated array
console.log("Array after adding unenroll name at the beginning:", sub);

// Display the first four items in the array
console.log("First four items in the array:", sub.slice(0, 4));
