let favColors = [];

// Get initial three colors
for (let i = 0; i < 3; i++) {
  let color = prompt(`Enter your favorite color ${i + 1}:`);
  favColors.push(color);
  console.log(`Current favorite colors: ${favColors}`);
}

// Add more colors until the user is done
while (true) {
  let addMore = prompt("Add another favorite color? (yes/no)");
  if (addMore.toLowerCase() === "yes") {
    let newColor = prompt("Enter a new favorite color:");
    favColors.push(newColor);
    console.log(`Current favorite colors: ${favColors}`);
  } else {
    break;
  }
}

console.log("Final list of favorite colors:", favColors);
