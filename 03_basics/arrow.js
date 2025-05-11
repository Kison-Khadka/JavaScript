
const logedIn = {
    name :"kison",
    age : 23,


    welcomeMessage : function (){
        console.log(`${this.name}, welcome to our website, ${this.age} is yor age`);   
        console.log(this); 
    }
}

// logedIn.welcomeMessage()
// logedIn.name = "hero"
// logedIn.welcomeMessage()

// console.log(this);


function text(){
    let username = "kison"
    console.log(this.username);
}

// text()


const userName = () => {
    let userName = "kison"
    console.log(`${this.userName}`);
    
}

// userName()

// const sum = (num1, num2) => num1 + num2

// const sum = (num1, num2) => (num1 + num2)

const sum = () => ({nam : "kison"})


console.log(sum());

