// The arrays for each subject 
let DSA = [];
let PL = [];
let Networks = [];

// I don't know if I'm gonna use a function here or not, so I didn't and just used loop and switch cases

while (true) {
    let subject = prompt(`Choose a subject: \n (A) DSA \n (B) PL \n (C) Networks`).toUpperCase();
    let operation = prompt(`Choose what to do: \n (A) Enroll \n (B) Unenroll \n (C) Select Another Subject \n (D) Exit`).toUpperCase();

    switch (operation) {
        case "A": // Enroll
            switch (subject) {
                case "A":
                    DSA.push(prompt(`Enter Student Name:`));
                    break;
                case "B":
                    PL.push(prompt(`Enter Student Name:`));
                    break;
                case "C":
                    Networks.push(prompt(`Enter Student Name:`));
                    break;
                default:
                    console.log("Invalid subject choice.");
            }
            continue;

        case "B": // Unenroll, I also legit searched how to removed an element in an array using a user prompt cuz I really don't know how 
            switch (subject) {
                case "A":
                    if (DSA.length === 0) {
                        console.log("No students to unenroll in DSA.");
                    } else {
                        let nameToRemove = prompt(`Enter the name to unenroll:\nCurrent students: ${DSA.join(", ")}`);
                        let index = DSA.indexOf(nameToRemove);
                        if (index !== -1) {
                            DSA.splice(index, 1);
                            console.log(`${nameToRemove} has been unenrolled from DSA.`);
                        } else {
                            console.log("Student not found.");
                        }
                    }
                    break;

                case "B":
                    if (PL.length === 0) {
                        console.log("No students to unenroll in PL.");
                    } else {
                        let nameToRemove = prompt(`Enter the name to unenroll:\nCurrent students: ${PL.join(", ")}`);
                        let index = PL.indexOf(nameToRemove);
                        if (index !== -1) {
                            PL.splice(index, 1);
                            console.log(`${nameToRemove} has been unenrolled from PL.`);
                        } else {
                            ("Student not found.");
                        }
                    }
                    break;

                case "C":
                    if (Networks.length === 0) {
                        console.log("No students to unenroll in Networks.");
                    } else {
                        let nameToRemove = prompt(`Enter the name to unenroll:\nCurrent students: ${Networks.join(", ")}`);
                        let index = Networks.indexOf(nameToRemove);
                        if (index !== -1) {
                            Networks.splice(index, 1);
                            console.log(`${nameToRemove} has been unenrolled from Networks.`);
                        } else {
                            console.log("Student not found.");
                        }
                    }
                    break;

                default:
                    console.log("Invalid subject.");
            }
            continue;

        case "C":
            continue;

        case "D":
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            break;

        default:
            console.log("Invalid operation.");
    }
    break;
