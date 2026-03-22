// this story has three characters let var const

// when {} comes with if else or function we say that this is scope of that

if(true){
  let a = 10
const b = 20
var c = 30
d = 40
}

// console.log(a); // a not defined
// console.log(b); // b not defined
console.log(c); // 30 (var came out of scope)
console.log(d); // 40 (40 came out of scope)

let e = 50
if(1){
    let e = 60
    console.log(e) // 60
}

console.log(e) // 50

// in browser global scope is different from the global scope in node
