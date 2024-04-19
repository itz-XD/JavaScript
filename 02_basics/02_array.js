const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Hitesh"));   // ye to simple check karta hai ki diya hua value array hai ya nahi ;)
console.log(Array.from("Hitesh")); // no-matter apan isko koisi bhi value de ye usko array me convert kardeta hai ;)

console.log(Array.from({name: "Hitesh"}));  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 ,score3));