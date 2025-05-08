// Primitive or (Primary)

const str = "Kison"
const num = 23
const bool = true // or False
const bigInt = 4543n
const empty = null // typeof null returns object this is a known JavaScript bug
const noValue = undefined

const singF = Symbol("123")
const singI = Symbol("123")

console.log(singF === singI);


console.log(typeof str, typeof num, typeof bool, typeof bigInt, typeof sing, typeof empty, typeof negValue);


// Non primitive or (Object)

const obj = {
    name : "kison",
    "School name" : "Gyanodaya",
    gender : "Mail",
    age : 17,
}

const myArray = ["Kison", true, null, undefined, 23, 234n]


const func = (name = "kison") => {
    console.log(name)
}

console.log(typeof obj, typeof myArray, typeof func);


// JS is dynamic programming language 

const scor = 100


// **********************************************************

// stack (Pramitive) /  Heap (Non-Pramitive)

let hero = "kison"

let nam = hero

nam = "khadka"

console.log(nam, hero)

let singin = {
    email : "user@gmail.com",
    password : "kison12#kahd"
}

let change = singin

change.email = "kison@gmail.com"

console.log(change.email, singin.email);


