
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


const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]