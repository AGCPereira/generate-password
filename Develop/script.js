// Assignment code here
var generateBtn = document.querySelector("#generate");

 // Created arrays of possible character choices
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")","?","<",">","/"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Created funtion to ask user what they want password to contain. 
// Made conditional statements to make sure that minimum requirements are met
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumber = confirm("Do you want your password to include numbers?");
    var askSymbol = confirm("Do you want your password to include symbols?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
   
    var responses = {
      length: length,
      askNumber: askNumber,
      askSymbol: askSymbol,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      
    }
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if ((!askNumber)&&(!askSymbol)&&(!askLowerCase)&&(!askUpperCase))
    alert("Must choose at least one type");
    else
    isValid = true;

  }while (!isValid);
  return responses;
}

// Function joins all the criteria user chooses and generates a password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombos = [];
  var finalPassword = "";


  if (passwordOptions.askNumber) {
    for (var i of number)
    possibleCombos.push(i);
  }
  if (passwordOptions.askSymbol) {
    for (var i of symbol)
    possibleCombos.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
    possibleCombos.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
    possibleCombos.push(i);
  }
  

  console.log(possibleCombos);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombos[Math.floor(Math.random() * possibleCombos.length)];
  }
  console.log(finalPassword);

  return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
