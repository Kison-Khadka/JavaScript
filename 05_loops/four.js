// for in loop


const myObj = {
    "Punegautam" : "Nepal", 
    "Bijaya shahi" : "Nepal",
    "Bhupendra Jogi" : "India",
    "Dhinchak Pooja" : "India", 
}

for (const key in myObj) {
    // console.log(`Hero name ${key}, and it's country ${myObj[key]}`);
    
}

const myArray = [1,4,5,4]

for (const key in myArray) {
    console.log(myArray[key]);
    
}

const myMap = new Map()

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);


for (const key in myMap) {
    console.log(key);
    
}