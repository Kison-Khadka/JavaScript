
// const hero = ["Punegautam", "Bijaya shahi", "Bhelu baje"]

// const heroNepal = hero.forEach((items) => { // for each loop is not return value
//     return(items);
// })

// console.log(heroNepal);


const myNum = [1,2,3,4,5,6,7,8,,9,10]

// const evenNum =  myNum.filter((item) => (item % 2 === 0))

// const evenNum =  myNum.filter((item) => {
//     return (item % 2 === 0)
// })


// for Each

const evenNum = []

myNum.forEach((item) => {
    if(item % 2 === 0){
        evenNum.push(item)
    }
})

// console.log(evenNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const booksDetermaniton = books.filter((bk) => {
//     if (bk.edition >= 2000 && bk.genre === "Non-Fiction"){
//         return(bk)
//     }
// }) 
// const booksDetermaniton = books.filter((bk) => {
//     return (bk.edition >= 2000 && bk.genre === "Non-Fiction")

// }) 

// console.log(booksDetermaniton);
