// Assignment Code
debugger;
var generateBtn = document.querySelector("#genenrate");
function generatePassword() {
    //Hello World Test 
return "Hello World";
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













