

function sayMyName(){
    console.log("K");
    console.log("I");
    console.log("S");
    console.log("O");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Punegautam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ksion"))
// console.log(loginUserMessage("ksion"))


function addProductCart(...prod){
    return prod
}

// console.log(addProductCart(599, 700, 999, 93, 83));

// const user = {
//     userName : "Kison",
//     price : 999
// }

function userDate(userVale) {
    return `User name is : ${userVale.userName} and Price of product ${userVale.price}`    
}

console.log(userDate(
    {
        userName : "kison",
        price : 999
    }
));


const myArray = [3, 2, 8, 9, 1]

function retutnSecValue(value) {
    return value[2]
}

console.log(retutnSecValue(myArray));









