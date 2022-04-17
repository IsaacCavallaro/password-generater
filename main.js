// Initialize AllChars to empty array to hold all characters
let allChars = [];

// Loop through UTF-16 code units from number 32 to 126
for (let i=32; i<127; i++) {
  allChars.push(String.fromCharCode(i)); // Push each character to end of allChars array
}

// Return a new array with random characters
function getMultipleRandom(allChars, num) {
  let shuffled = [...allChars].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}


console.log(getMultipleRandom(allChars, 2)); // returns array of two random characters as string inputs
console.log(getMultipleRandom(allChars, 15).join("")); // returns array of 15 random characters as string inputs and joins them as one String