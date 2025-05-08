
const freefireUid = 234234; // const is block scoped and its value cannot be changed.
let userName = "kison";     // let is block scoped and its value can be changed.

// var is function scoped and can be changed
// Avoid using var due to potential bugs and hoisting issues
var location = "Nepal";

// This works but avoid assigning variables without let, const.
gender = "Male";

// Declaring a variable without initializing gives undefined.
let state;

console.table([freefireUid, userName, location, gender, state]);