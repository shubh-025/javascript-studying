const heros = ["thor", "iron", "spider"];
const dc = ["super", "flash", "batman", "aquaman"];

// heros.push(dc)
// console.log(heros)
// [ 'thor', 'iron', 'spider', [ 'super', 'flash', 'batman', 'aquaman' ] ]
// a whole array pushed as an element

// console.log(heros[3][0]);

// to really join them

const tm = heros.concat(dc);
console.log(tm);

// push() pushes in existing array
// concat merges two arrays and returns new array without changing og arrays

// better way to do this , spread operator

const tm2 = [...heros , ...dc]
console.log(tm2);
// using this add so many arrays u want to join (easier tham concat)

const arr = [1,2,3,[4,5,6],7,[6,7,[9,4]]];

const arr_usable = arr.flat(Infinity)
// give depth in flat to get no.s
console.log(arr_usable);

// isarray() tells wether an object is array or not

console.log(Array.isArray("shubh"))
console.log(Array.from("shubh"))// to convert anything into array
console.log(Array.from({name: "shubh"}))// we gave an object so it returns [] , we have to mention that make array of keys(or values)

score1 = 200
console.log(Array.of(100,"shubh",score1));





