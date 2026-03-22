console.log(2>1)
console.log(2==1)
console.log(2<1)
console.log("2" > 1) // true js automatically converted "2" to 2

//typescript doesnt allow to compare 2 diff data types

console.log("02" > 1) //true
console.log(null == 0) //false
console.log(null > 0) //false
console.log(null >= 0) //true

// (==) works differently and comparison operator work differently (> , < , >=) so they convert null into a no. first (0)

console.log(undefined == 0) //false
console.log(undefined > 0)//false
console.log(undefined >= 0)//false

// strict check
// === not only checks value but datatype also

console.log("2" == 2)//true
console.log("02" === 2)//false

// these types of conversions cause confusions in javascript so write clean code