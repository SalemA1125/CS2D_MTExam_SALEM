// Arrays to store the enrolled students for each subject
let DSA = [];
let PL = [];
let Networks = [];

// Function to prompt the user for subject selection
function selectSubject() {
    const subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks");
    switch(subjectChoice) {
        case "A":
            operations(DSA, "DSA");
            break;
        case "B":
            operations(PL, "PL");
            break;
        case "C":
            operations(Networks, "Networks");
            break;
        default:
            console.log("Invalid choice. Please try again.");
            selectSubject();
    }
}

// Function to handle operations (Enroll, Unenroll, etc.)
function operations(subjectArray, subjectName) {
    const operationChoice = prompt(`Select an operation for ${subjectName}:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`);
    
    switch(operationChoice) {
        case "A":
            enrollStudent(subjectArray, subjectName);
            break;
        case "B":
            unenrollStudent(subjectArray, subjectName);
            break;
        case "C":
            selectSubject();
            break;
        case "D":
            exitProgram();
            break;
        default:
            console.log("Invalid choice. Please try again.");
            operations(subjectArray, subjectName);
    }
}

// Function to enroll a student in the selected subject
function enrollStudent(subjectArray, subjectName) {
    const studentName = prompt(`Enter the name of the student to enroll in ${subjectName}:`);
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled in ${subjectName}.`);
    operations(subjectArray, subjectName);
}

// Function to unenroll a student from the selected subject
function unenrollStudent(subjectArray, subjectName) {
    if (subjectArray.length === 0) {
        console.log(`No students currently enrolled in ${subjectName}.`);
    } else {
        console.log(`Currently enrolled students in ${subjectName}: ${subjectArray.join(", ")}`);
        const studentName = prompt(`Enter the name of the student to unenroll from ${subjectName}:`);
        
        const index = subjectArray.indexOf(studentName);
        if (index !== -1) {
            subjectArray.splice(index, 1); // Removing the student from the array
            console.log(`${studentName} has been unenrolled from ${subjectName}.`);
        } else {
            console.log(`${studentName} is not enrolled in ${subjectName}.`);
        }
    }
    operations(subjectArray, subjectName);
}

// Function to exit the program and print all enrolled students
function exitProgram() {
    console.log("Exiting the program...");
    console.log("Enrolled students per subject:");
    console.log(`DSA: ${DSA.join(", ")}`);
    console.log(`PL: ${PL.join(", ")}`);
    console.log(`Networks: ${Networks.join(", ")}`);
}

// Start the program by selecting a subject
selectSubject();
