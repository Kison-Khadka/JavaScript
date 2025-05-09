// singleton
// Object.create

// object literals

const mysymbol = Symbol("key1")

const logIn = {
    userName: "Kison",
    "full name": "Kison khadka",
    [mysymbol]: "mykey1", // Accesses the Symbol keyed property
    age: 18,
    location: "Kathmandu",
    email: "kison@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Saturday"]
}


// console.log(logIn.userName); 
// console.log(logIn.full name) // It is not work
// console.log(logIn["full name"]); //  Works — bracket notation is required
// console.log(logIn[mysymbol]);    //  Accesses the Symbol-keyed property

logIn.email = "kison@chatgpt.com"
// console.log(logIn.email)


// Object.freeze(logIn) // It makes the object immutable and You cannot Add,Delete,Change and Modify properties.
logIn.email = "kison@microsoft.com"
// console.log(JsUser);

logIn.greating = function(){
    console.log("Hello")
}
logIn.greatingTwo = function(){
    console.log(`Hello, ${this.userName}`)
}

// console.log(logIn.greating);
console.log(logIn.greating());
console.log(logIn.greatingTwo());











