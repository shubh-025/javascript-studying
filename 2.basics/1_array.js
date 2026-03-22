// arrays

const myarr = [0,1,2,5,66,true,"shubh"]
// different types of elements allowed 
// js arrays are resizable
// 0 based indexing
// js array copy operation create shllow copy
// shallow copy = both copies referencing to same data
// deep copy = both are different , change in one will not affect the other

// other ways to declare aray

const heros = ["iron","super",'wanda']
const arr2 = new Array(1 , 2, 3, 4)
// console.log(arr2[2]);

// difference in both these ways , second one is calling an constructor which causes little overhead and
// when u pass single no. in the new Array(3) it doesnt create a array with 3 (size = 1) but it creates an empty array of size=3


// Array methods
console.log('og array',arr2);

arr2.push(6)
arr2.pop()

arr2.unshift(3) // to start a no in begin but computationally extensive
console.log(arr2);

arr2.shift() // undos unshift
console.log(arr2); 

// some questionaire methods which give ans

console.log(arr2.includes(3))// true
console.log(arr2.indexOf(3))// 2
console.log(arr2.indexOf(22))// -1(if not there)

// to convert array into string

const arr3 = arr2.join()// joins all the elements in a string
console.log(arr2); 
console.log(arr3 , typeof arr3); 

// slice and splice 

const sl = arr2.slice(1,3)// take index 1 and 2 not 3
console.log(sl)
console.log('slice',arr2)// no change in og array


const spl = arr2.splice(1,3)
// 2 changes , it takes index 1,2,3(last too)
// and cuts that chunk from the og array
console.log(spl)
console.log('splice',arr2)// we see leftover array after splice

