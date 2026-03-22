// primitive and non-primitive datatypes
//based on how data is stored in memory and accessed
 
// primitive (call by value) you are not given the memory reference of original data but a copy and u make changes in the copy

//7 types = string, number, boolean, null, undefined, symbol(used in advanced js for uniqueness) , BigInt

// Reference (non-primitive) you are directly given the refernce(address) of these data types

// array , objects, functions

/* to master js study browser events and js objects thoroughly */


// NOTE= js is dynamically typed, dont need to specifically define int,string etc type is determined during runtime ,
// same variable can be assigned to a no. or string etc

// java , c,c++,typescript are statically typed languages

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // false

// const big = 32132165265421551n // put n for bigint

const heros = ["nagraj","doga"]

// object in {}

let obj = {
    name: "shubh",
    age: 22
}

// function(){}


// declaring fn as variable
const myfn = function(){
    console.log("Hello world")
}

// imp-> know data type of something

console.log(typeof myfn) // function
console.log(typeof id) // function

// null -> datatype is object

