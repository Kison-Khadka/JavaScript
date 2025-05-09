
// const tinderUser = Object.create(person);

const tinder = {}

tinder.id = "kison13e"
tinder["full name"] = "kison"
tinder.email = "xxx@gmail.com"

// console.log(tinder);

tinderUser = {
    email : "Kison",
    "fullName" : {
        "fullyName" : {
            "firstName": "kison",
            "lastName" : "khadka"
        }
    },
    password : "Kison12ekhadka",
}

// console.log(tinderUser.fullName?.fullyName.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {2 : "c", 3 : "d"}
const obj3 = {4 : "e", 5 : "f"}


// const mergeObj = {obj1, obj2}
// const mergeObj = Object.assign({}, obj1, obj2, obj3) // {} is required and merge 2 or more object


const mergeObj = {...obj1, ...obj2}

console.log(mergeObj);


