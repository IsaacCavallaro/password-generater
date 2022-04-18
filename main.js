// One click copy link to clipboard

let allChars = []; // Initialize allChars to empty array to hold all potential password characters (UTF-16 code units)
let allPasswords = []; // Initialize allPasswords array to hold a list of 4 differing passwords
let password; 
let errorMessage = document.createElement("p"); // Create a paragraph to display error message to user
let inputField = document.getElementById("input") // Select input field and store in inputField
let input = document.getElementById("input").value // Select the value of the input field and store in input

////////////////////////////  ADDING ALL CHARACTERS TO ALLCHARS ARRAY  ///////////////////////////////////

// Loop through UTF-16 code units from number 32 to 126
for (let i=32; i<127; i++) {
  allChars.push(String.fromCharCode(i)); // Push each character to the end of allChars array
}

////////////////////////////  INPUT FUNCTIONS  ///////////////////////////////////

// Invoke updateUnitValues() when the the "input" of inputField is updated
function inputListener() {
  inputField.addEventListener("input", updateUnitValues);
}

function updateUnitValues() {

  // Remove error message if it is already displayed
  if (errorMessage.textContent === "Maximum length is 15 characters" || errorMessage.textContent === "Minimum length is 8 characters"){
    errorMessage.remove();
  }
  
  input = document.getElementById("input").value // Select the value of the input field and store in input
  inputNumOnly = input.replace(/\D/g, "") // Only allow numbers for input
  document.getElementById("input").value = inputNumOnly // Set the id="input" to equal inputNumOnly 
}


////////////////////////////  GENERATE PASSWORDS BUTTON  ///////////////////////////////////

// Invoke generateBtn when "generate passwords" is clicked
function generateBtn() {

  // Check if the input is bigger than 15 characters
  if (input > 15) {
    errorMessage.textContent = "Maximum length is 15 characters";
    document.getElementById("password-length-wrapper").appendChild(errorMessage);
  }
  // Check if the input is less than 1 character
  else if (input < 8) {
    errorMessage.textContent = "Minimum length is 8 characters";
    document.getElementById("password-length-wrapper").appendChild(errorMessage);
  }
  // If the input is between 1 and 15 characters long
  else {
    createPasswords(allChars, input); // Invoke createPasswords when the "generate passwords" button is clicked, passing all potential password characters and the password length
  }
}

////////////////////////////  CREATE PASSWORDS ///////////////////////////////////

// Shuffle UTF-16 code units 
function createPasswords(allChars, input) {

  // Loop while the length of allPasswords array is less than 5
  while (allPasswords.length < 5) {
    password = [...allChars].sort(() => 0.5 - Math.random()); // Shuffle UTF-16 code and store in array called password
    password = password.slice(0, input); // Slice array from 0 index to the value of input
    password = password.join('') // Convert array to a string
    allPasswords.push(password) // Push string to end of allPasswords array
  }
  passwordID("pwd-result-one");
  passwordID("pwd-result-two");
  passwordID("pwd-result-three");
  passwordID("pwd-result-four");
}

////////////////////////////  APPEND PASSWORDS TO DOM AND DISPLAY ///////////////////////////////////

function passwordID(sectionId) {

    if (sectionId === "pwd-result-one"){
      document.getElementById(sectionId).textContent =  allPasswords.pop();
    }

    if (sectionId === "pwd-result-two"){
      document.getElementById(sectionId).textContent =  allPasswords.pop();
    }
  
    if (sectionId === "pwd-result-three"){
      document.getElementById(sectionId).textContent =  allPasswords.pop();
    }
  
    if (sectionId === "pwd-result-four"){
      document.getElementById(sectionId).textContent =  allPasswords.pop();
    }
 
}

////////////////////////////  INITIAL INVOCATIONS ///////////////////////////////////
inputListener();