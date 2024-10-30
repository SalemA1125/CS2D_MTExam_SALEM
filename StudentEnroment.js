let dsaStudents = [];
let plStudents = [];
let networksStudents = [];

function enrollStudent(subjectArray, studentName) {
  subjectArray.push(studentName);
  console.log(`${studentName} enrolled in ${subjectArray.name}`);
}

function unenrollStudent(subjectArray, studentName) {
  let index = subjectArray.indexOf(studentName);
  if (index > -1) {
    subjectArray.splice(index, 1);
    console.log(`${studentName} unenrolled from ${subjectArray.name}`);
  } else {
    console.log(`${studentName} not found in ${subjectArray.name}`);
  }
}

function displayStudents(subjectArray) {
  console.log(`Students in ${subjectArray.name}: ${subjectArray.join(", ")}`);
}


//Main program loop
dsaStudents.name = "DSA";
plStudents.name = "PL";
networksStudents.name = "Networks";

let subjectChoice;
let operationChoice;
let studentName;

do {
  subjectChoice = prompt("Select subject:\n(A) DSA\n(B) PL\n(C) Networks");
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
      default:
        console.log("Invalid subject choice.");
        continue; //Go back to the beginning of the loop
    }

    operationChoice = prompt("Select operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

    if (operationChoice) {
      switch (operationChoice.toUpperCase()) {
        case "A":
          studentName = prompt("DSA:");
          enrollStudent(selectedArray, studentName);
          break;
        case "B":
          studentName = prompt("PL:");
          unenrollStudent(selectedArray, studentName);
          break;
        case "C":
          //No action needed, loop will continue to subject selection
          break;
        case "D":
          //Exit the loop
          break;
        default:
          console.log("Invalid operation choice.");
      }
    }
  }
} while (operationChoice.toUpperCase() !== "D");


//Print the final list of students in each subject
console.log("\nFinal Student Lists:");
displayStudents(dsaStudents);
displayStudents(plStudents);
displayStudents(networksStudents);
