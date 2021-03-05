// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password Function

function generatePassword() {
  var lengthOfPassword = prompt(
  "Select a length between 8 and 128 characters"
); 

// Alert boxes
if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
  var includeSpecial = confirm("Click ok to confirm special characters");
  var includeNumber = confirm("Click ok to confirm numeric characters");
  var includeLower = confirm("Click ok to confirm lowercase characters");
  var includeUpper = confirm("Click ok to confirm uppercase characters");
} else {
  alert(
    "Password must be a length of at least 8 characters and no more than 128 characters"
  );
  return "";
}

if (includeSpecial || includeNumber || includeLower || includeUpper) {
} else {
  alert("Must have at least 1 special character");
  return "";
}

var creatingPassword = [];
var counter = 1;

// For loop
for (let index = 1; index <= lengthOfPassword; index = counter) {
  if (includeSpecial == true && counter <= lengthOfPassword) {
    getSymbol();
    counter++;
  }

  if (includeNumeric == true && counter <= lengthOfPassword) {
    getNumber();
    counter++;
  }

  if (includeLower == true && counter <= lengthOfPassword) {
    getLower();
    counter++;
  }

  if (includeUpper == true && counter <= lengthOfPassword) {
    getUpper();
    counter++;
  }
}

// Symbal character
function getSymbol() {
  var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var holdSymbol = symbol[Math.floor(Math.random() * symbol.length)];
  
  creatingPassword.push(holdSymbol);
}

// Uppercase character
function getUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var holdUpper = upperCase[Math.floor(Math.random() * upperCase.length)];

  creatingPassword.push(holdUpper);
}

// Lowercase character
function getLower() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var holdLower = lowercase[Math.floor(Math.random() * lowercase.length)];

  creatingPassword.push(holdLower);
}

// Number character
function getNumber() {
  var number1 = "1234567890";
  var holdNumber = number1[Math.floor(Math.random() * number1.length)];

  creatingPassword.push(holdNumber);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}