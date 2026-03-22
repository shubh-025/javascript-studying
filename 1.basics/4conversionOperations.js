let score = 69

console.log(typeof score);
console.log(typeof(score)) //both same

// let score2 = "33"
// let valueInNumber = Number(score2) 
// console.log(typeof score2);  //string
// console.log(typeof valueInNumber);  //number


// let score3 = "33abc"
// let valueInNumber2 = Number(score3)
// console.log(typeof score3);   //string
// console.log(typeof valueInNumber2);  //number
// console.log(valueInNumber2) //nan

// "33" converts to 33
// "33abs" will not be able to convert to number (NaN)
// true -> 1 , false -> 0

let isLoggedIn = " "

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

// non zero -> true , 0 -> false
// "" -> false , else -> true
// null and undefined is false

let x = 25
let s = String(x)
console.log(s)
 