const score = 500 // js will declare it as number but 

// we can define type explicitly
const bal = new Number(100)
console.log(bal); // Number:100 diff way to give output

// number has very few methods compare to string

console.log(bal.toString()) //100  string
console.log(bal.toString().length)//3
console.log(bal.toFixed(2))// 100.00 to get decimal values also

const num = 23.5468
console.log(num.toPrecision(3)); //23.5 returns a string
// if num=123.8962 then op 124
 
const x = 1000000
console.log(x.toLocaleString());//1,000,000 we get commas to see zeros clearly
console.log(x.toLocaleString('en-IN'));//10,00,000

// for cp enthusiasts----------

// console.log(Number.MAX_VALUE)// 
// console.log(Number.MIN_VALUE)//


//******************** MATHS*********

// maths library comes by default with js

// in the console in browser we see many more methods than here on node

console.log(Math.abs(-5))//5
// console.log(Math.round(4.3))//4
// console.log(Math.round(4.7))//5
// console.log(Math.round(4.5))//5
// console.log(Math.ceil(4.2))//5
// console.log(Math.ceil(4.8))//4
console.log(Math.max(4,5,6,8))//8

console.log(Math.random());// random no bw 0 and 1
console.log(Math.random()*10);// random no bw 0 and 10

// trick to get value bw mina nd max
const min = 10
const max = 20
console.log(Math.floor( Math.random() * (max - min + 1) )+ min) 
// this is a tried and tested trick to get a integer bw min and max


