const nepaliHeros = ["Punegautam", "Bijaya shahi", "Bhelu baje"]

const indianHeros = ["Bhupendra Jogi", "Dhinchak Pooja", "Hindustani bhau"]


// nepaliHeros.push(indianHeros)

// console.log(nepaliHeros);
// console.log(nepaliHeros[3][1]);

// const allHeros = nepaliHeros.concat(indianHeros)
// console.log(allHeros);

const all_new_heros = [...nepaliHeros, ...indianHeros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Kison"))
console.log(Array.from("Kison"))
console.log(Array.from({name: "kison"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

