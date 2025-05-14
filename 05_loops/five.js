
// const evenNum = [1,2,3,4,5,6,7,8,,9,10]

// evenNum.forEach(function(even) {        //Normal Function
//     if(even % 2 === 0){
//         console.log(even);
//     }
// })



// evenNum.forEach((even) => {          // Arrow Function
//     if(even % 2 === 0){
//         console.log(even);
//     }
// })



// function even(item){
//     console.log(item);
// }

// evenNum.forEach(even)

const language = [
    {
        languageName : "Python",
        languageFileName : "Py"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "JavaScript",
        languageFileName : "npm"
    },
]

language.forEach((item) => {
    console.log(item.languageName); 
});






