// Immediately Invoked Function Expressions

// Always end previous statements with ; or put the IIFE on a new line like this

(function connectDb(){
    // name is iife
    console.log(`DB is connected`)
})();

( (name) => {
    console.log(`Hello ${name}`);
} )("Kison");