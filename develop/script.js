// Function to generate values
var symbol = "~{}[];:<>!@#$%^&*()_+?"
var number = "1234567890"
var lowerCase ="abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Required Characters

function generatePassword(){
  var finalPassword = "";
  var approveCharacters = "";
 
// Password length
  if(passLength < 8){
    return alert("Password must be at least 8 characters");
  }else if (passLength > 128){
    return alert("Password must be 128 characters or less");
  }

// Prompt boxes
  var passLength = prompt("How many characters would you like to have");

  var passUpper = confirm("Please click to confirm uppercase");

  if (passUpper === true){
    approveCharacters += lowerCase;
  } 

  var passSymbol = confirm("Please click to confirm symbol");

  if (passSymbol === true){
    approveCharacters += symbol;
  }

  var passNumber = confirm("Please click to confirm number");

  if (passNumber === true){
    approveCharacters += number;
  }

  // For loop
  for(let i=0; i < passLength; i++){
    var randomInit = Math.floor(Math.random() * approveCharacters.length);

    var randomInput = approveCharacters[randomInit];
    finalPassword += randomInput
  }
  return finalPassword;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

