let userProfile = {
  fullName: prompt("Andrea Salem:"),
  age: parseInt(prompt("19:")),
  favNumber: parseInt(prompt("25:")),
  favColors: prompt("Blue, Red:").split(",") //Allows multiple colors
};

//Simple input validation (you could make this more robust)
while (isNaN(userProfile.age) || userProfile.age <=0){
    userProfile.age = parseInt(prompt("25. 8:"));
}
while (isNaN(userProfile.favNumber)){
    userProfile.favNumber = parseInt(prompt("25. 11:"));
}

console.log(userProfile);
