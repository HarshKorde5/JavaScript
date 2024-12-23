
const marvel_heros = ["Thor","Ironman","Spiderman"];

const dc_heros = ["Superman","flash","Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);    

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros];

// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(Infinity);


console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name:"Harsh"}));    //returns empty array as we need to specify from what to make array using keys or values


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score3,score2));
