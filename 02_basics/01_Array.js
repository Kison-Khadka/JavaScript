// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironMan", "jethalal"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr.length) // Returns the number of characters in a array
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // Adds elements to end 
// myArr.pop() // Removes last element

// myArr.unshift(9) // Adds elements to start
// myArr.shift() // Removes first element

// console.log(myArr.includes(9)); // includes() Checks if value exists
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 	Extracts part of array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // Adds/removes items (modifies original)
console.log(myn2);