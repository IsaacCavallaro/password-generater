let allChars = []; // Initialize AllChars to empty array to hold all characters
let num = 15; // Initialize num to global variable
let allPasswords = [];
let password;

// Loop through UTF-16 code units from number 32 to 126
for (let i=32; i<127; i++) {
  allChars.push(String.fromCharCode(i)); // Push each character to the end of allChars array
}

// Invoke createPasswords when the "generate passwords" button is clicked
function generateBtn() {
  createPasswords(allChars, num)
}

// Shuffle UTF-16 code units 
function createPasswords(allChars, num) {

  while (allPasswords.length < 5) {
    password = [...allChars].sort(() => 0.5 - Math.random()); // Shuffle UTF-16 code and store in array
    password = password.slice(0, num); // Slice array from 0 index to the value of num
    password = password.join('') // Convert array to a string
    allPasswords.push(password) // Push string to end of allPasswords array
  }
  passwordID("pwd-result-one")
  passwordID("pwd-result-two")
  passwordID("pwd-result-three")
  passwordID("pwd-result-four")
}

function passwordID(sectionId) {

    if (sectionId === "pwd-result-one"){
      document.getElementById(sectionId).textContent =  allPasswords.pop()
    }

    if (sectionId === "pwd-result-two"){
      document.getElementById(sectionId).textContent =  allPasswords.pop()
    }
  
    if (sectionId === "pwd-result-three"){
      document.getElementById(sectionId).textContent =  allPasswords.pop()
    }
  
    if (sectionId === "pwd-result-four"){
      document.getElementById(sectionId).textContent =  allPasswords.pop()
    }
 
}
