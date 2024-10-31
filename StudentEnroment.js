// Arrays for each subject to hold enrolled students
let DSA = [];
let PL = [];
let Networks = [];

// Infinite loop to repeatedly prompt for subject and action
while (true) {
    // Prompt user to choose a subject and convert input to uppercase for consistency
    let subject = prompt(`Choose a subject: \n (A) DSA \n (B) PL \n (C) Networks`).toUpperCase();

    // Prompt user to choose an operation and convert input to uppercase for consistency
    let operation = prompt(`Choose what to do: \n (A) Enroll \n (B) Unenroll \n (C) Select Another Subject \n (D) Exit`).toUpperCase();

    // Switch statement to handle each operation based on user input
    switch (operation) {
        case "A": // Enroll a student in the selected subject
            switch (subject) {
                case "A":
                    DSA.push(prompt(`Enter Student Name:`)); // Add to DSA array
                    break;
                case "B":
                    PL.push(prompt(`Enter Student Name:`)); // Add to PL array
                    break;
                case "C":
                    Networks.push(prompt(`Enter Student Name:`)); // Add to Networks array
                    break;
                default:
                    console.log("Invalid subject choice."); // Handle invalid subject input
            }
            continue; // Continue to the next iteration of the loop

        case "B": // Unenroll a student from the selected subject
            switch (subject) {
                case "A":
                    if (DSA.length === 0) {
                        console.log("No students to unenroll in DSA."); // Check if DSA has students
                    } else {
                        let nameToRemove = prompt(`Enter the name to unenroll:\nCurrent students: ${DSA.join(", ")}`);
                        let index = DSA.indexOf(nameToRemove);
                        if (index !== -1) {
                            DSA.splice(index, 1); // Remove the student if found
                            console.log(`${nameToRemove} has been unenrolled from DSA.`);
                        } else {
                            console.log("Student not found."); // Handle if student not found
                        }
                    }
                    break;

                case "B":
                    if (PL.length === 0) {
                        console.log("No students to unenroll in PL."); // Check if PL has students
                    } else {
                        let nameToRemove = prompt(`Enter the name to unenroll:\nCurrent students: ${PL.join(", ")}`);
                        let index = PL.indexOf(nameToRemove);
                        if (index !== -1) {
                            PL.splice(index, 1); // Remove the student if found
                            console.log(`${nameToRemove} has been unenrolled from PL.`);
                        } else {
                            console.log("Student not found."); // Handle if student not found
                        }
                    }
                    break;

                case "C":
                    if (Networks.length === 0) {
                        console.log("No students to unenroll in Networks."); // Check if Networks has students
                    } else {
                        let nameToRemove = prompt(`Enter the name to unenroll:\nCurrent students: ${Networks.join(", ")}`);
                        let index = Networks.indexOf(nameToRemove);
                        if (index !== -1) {
                            Networks.splice(index, 1); // Remove the student if found
                            console.log(`${nameToRemove} has been unenrolled from Networks.`);
                        } else {
                            console.log("Student not found."); // Handle if student not found
                        }
                    }
                    break;

                default:
                    console.log("Invalid subject."); // Handle invalid subject input
            }
            continue; // Continue to the next iteration of the loop

        case "C": // Select another subject without performing any operation
            continue; // Continue to the next iteration of the loop

        case "D": // Exit and display final lists
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            break;

        default:
            console.log("Invalid operation."); // Handle invalid operation input
    }
    break; // Break the loop to exit the program
