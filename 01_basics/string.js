
const userName = "Ksion"
let age = 17

// console.log(name + repoCount + " Value"); // This is not good practice 

console.log(`Hello my name is ${userName} and my repo count is ${age}`);

const nameOfGame = new String('kison-khadka-com') // This is another method to assign string

// console.log(nameOfGame[0]);

// console.log(nameOfGame.__proto__);


// Returns the number of characters in a string
// console.log(nameOfGame.length);


// Converts all characters to uppercase or lowercase.
// console.log(nameOfGame.toUpperCase());
// console.log(nameOfGame.toLowerCase());

// Returns the character at the given index. "S"
console.log(nameOfGame.charAt(2));


// Returns the first index of the substring. Returns -1 if not found.
console.log(nameOfGame.indexOf("k")); // 0
console.log(nameOfGame.indexOf("x")) // -1


// Returns the last index of a substring.
const newString = nameOfGame.lastIndexOf("a") // 11
console.log(newString);

const anotherString = nameOfGame.slice(-8, 4)

console.log(anotherString);

const newStringOne = "   Kison    "

console.log(newStringOne);

//	Removes whitespace
console.log(newStringOne.trim());

const url = "https://kison.com/kison%34khadka"

console.log(url.replace('%34', '-')) // It replace one value to another value

// Checks if the string contains a given value. Returns true or false.
console.log(url.includes('sundar'))

console.log(nameOfGame.split('-')); // It convert string to array base of "-" sign

// Repeat string n times
console.log("ha".repeat(3));

// Checks if the string starts or ends with a specific substring.
console.log("JavaScript".startsWith("Java")); // true
console.log("index.html".endsWith(".html"));  // true
