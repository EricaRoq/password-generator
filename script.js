// Assignment Code
debugger;
var generateBtn = document.querySelector("#genenrate");
function generatePassword() {
  var lengthOfPassword = prompt(
  "Select a length between 8 and 128 characters"
); 

if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
  var resultSpecial = confirm("Click ok to confirm special characters");
  var resultNumeric = confirm("Click ok to confirm numeric characters");
  var resultLower = confirm("Click ok to confirm lowercase characters");
  var resultUpper = confirm("Click ok to confirm uppercase characters")
} else {
  alert(
    "Password length must be a length of at least 8 characters and no more than 128 characters"
  );
  return "";
}
    
if (resultSpecial || resultNumeric || resultLower || resultUpper) {
} else {
  alert("Must have at least 1 special character");
  return "";
}

var creatingPassword = [];
var counter = 1;

for (let index = 1; index <= lengthOfPassword; index = counter) {
  if (resultSpecial == true && counter <= lengthOfPassword) {
    getRandomSymbol();
    counter++;
  }

  if (resultNumeric == true && counter <= lengthOfPassword) {
    getNumber();
    counter++;
  }

  if (resultLower == true && counter <= lengthOfPassword) {
    getLower();
    counter++;
  }

  if (resultUpper == true && counter <= lengthOfPassword) {
    getUpper();
    counter++;
  }
}

// Random character
function getRandomSymbol() {
  var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var holdSymbol = symbol[Math.floor(Math.random() * symbol.length)];
  
  creatingPassword.push(holdSymbol);
}

// Random Uppercase
function getUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var holdUpper = upperCase[Math.floor(Math.random() * upperCase.length)];

  creatingPassword.push(holdUpper);
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













