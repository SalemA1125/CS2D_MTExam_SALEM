let dsaStudents = [];
let plStudents = [];
let networksStudents = [];

//Helper function to display students in a subject
function displayStudents(subjectArray) {
    console.log(`Students in ${subjectArray.name}: ${subjectArray.length > 0 ? subjectArray.join(", ") : "None"}`);
}

//Main program loop
dsaStudents.name = "DSA";
plStudents.name = "PL";
networksStudents.name = "Networks";

let subjectChoice;
let operationChoice;
let studentName;

do {
    subjectChoice = prompt("Select subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit");
    if (subjectChoice) {
        let selectedArray;
        switch (subjectChoice.toUpperCase()) {
            case "A":
                selectedArray = dsaStudents;
                break;
            case "B":
                selectedArray = plStudents;
                break;
            case "C":
                selectedArray = networksStudents;
                break;
            case "D":
                //Exit the subject selection loop
                break;
            default:
                console.log("Invalid subject choice.");
                continue;
        }

        if (subjectChoice.toUpperCase() !== "D") { //Only proceed if subject is selected
            operationChoice = prompt("Select operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject");
            if (operationChoice) {
                switch (operationChoice.toUpperCase()) {
                    case "A":
                        studentName = prompt("Enter student name to enroll:");
                        selectedArray.push(studentName);
                        console.log(`${studentName} enrolled in ${selectedArray.name}`);
                        break;
                    case "B":
                        studentName = prompt("Enter student name to unenroll:");
                        let index = selectedArray.indexOf(studentName);
                        if (index > -1) {
                            selectedArray.splice(index, 1);
                            console.log(`${studentName} unenrolled from ${selectedArray.name}`);
                        } else {
                            console.log(`${studentName} not found in ${selectedArray.name}`);
                        }
                        break;
                    case "C":
                        //No action needed, loop will continue to subject selection
                        break;
                    default:
                        console.log("Invalid operation choice.");
                }
            }
        }
    }
} while (subjectChoice.toUpperCase() !== "D");


//Print the final list of students in each subject
console.log("\nFinal Student Lists:");
displayStudents(dsaStudents);
displayStudents(plStudents);
displayStudents(networksStudents);
