
let allChars = []; // Initialize AllChars to empty array to hold all characters
let num = 15; // Initialize num to global variable
let passwordOne = [];
let passwordTwo = [];
let passwordThree = [];
let passwordFour = [];

// Loop through UTF-16 code units from number 32 to 126
for (let i=32; i<127; i++) {
  allChars.push(String.fromCharCode(i)); // Push each character to the end of allChars array
}

// Invoke getMultipleRandom when the "generate" button is clicked
function generatePasswords() {
  shuffleChars(allChars, num)
}

// Shuffle UTF-16 code units 
function shuffleChars(allChars, num) {
      if (passwordOne.length === 0) { // Check if passwordOne is empty
        passwordOne = [...allChars].sort(() => 0.5 - Math.random()); // Shuffle UTF-16 code and store in array
        passwordOne = passwordOne.slice(0, num); // Slice array from 0 index to the value of num
        passwordOne = passwordOne.join('') // Convert array to a string
      }

      if (passwordTwo.length === 0) { // Check if passwordTwo is empty
        passwordTwo = [...allChars].sort(() => 0.5 - Math.random()); // Shuffle UTF-16 code and store in array
        passwordTwo = passwordTwo.slice(0, num); // Slice array from 0 index to the value of num
        passwordTwo = passwordTwo.join('') // Convert array to a string

      }

      if (passwordThree.length === 0) { // Check if passwordThree is empty
        passwordThree = [...allChars].sort(() => 0.5 - Math.random()); // Shuffle UTF-16 code and store in array
        passwordThree = passwordThree.slice(0, num); // Slice array from 0 index to the value of num
        passwordThree = passwordThree.join('') // Convert array to a string

      }

      if (passwordFour.length === 0) { // Check if passwordFour is empty
        passwordFour = [...allChars].sort(() => 0.5 - Math.random()); // Shuffle UTF-16 code and store in array
        passwordFour = passwordFour.slice(0, num); // Slice array from 0 index to the value of num
        passwordFour = passwordFour.join('') // Convert array to a string
      }
      
      displayPasswords("pwd-result-one") // invoke displayPasswords function with "pwd-result-one" as the sectionId parameter
      displayPasswords("pwd-result-two") // invoke displayPasswords function with "pwd-result-two" as the sectionId parameter
      displayPasswords("pwd-result-three") // invoke displayPasswords function with "pwd-result-three" as the sectionId parameter
      displayPasswords("pwd-result-four") // invoke displayPasswords function with "pwd-result-four" as the sectionId parameter
}

function displayPasswords(sectionId) {

  if (sectionId === "pwd-result-one"){
    document.getElementById(sectionId).textContent =  passwordOne
  }

  if (sectionId === "pwd-result-two"){
    document.getElementById(sectionId).textContent =  passwordTwo
  }

  if (sectionId === "pwd-result-three"){
    document.getElementById(sectionId).textContent =  passwordThree
  }

  if (sectionId === "pwd-result-four"){
    document.getElementById(sectionId).textContent =  passwordFour 
  }


}

