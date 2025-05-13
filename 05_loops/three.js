

const myArray = ["Punegautam", "Bijaya shahi", "Bhelu baje"]

//For of loop
for (const element of myArray) { 
    // console.log(element)
}

const myName = "Kison"

for (const element of myName) {
    // console.log(element);
}

// Maps

const myMap = new Map()

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);


console.log(myMap.get("a"));

for (const [key, value] of myMap) { // Map is iterable
    console.log(key ,':-', value);
}

// const myObj = {
//     name : "Kison",
//     age : 17,
//     gender: "Male"
// }

// for (const [key, value] of myObj) { // Object is not iterable
//     console.log(key , ":-", value);
    
// }