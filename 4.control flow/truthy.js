// some values are called truthy values and some are called falsy values

const useremail = "asvdh";

if (useremail) {
  console.log("have user email");
} else {
  console.log("dont have email");
}

// empty string is considered falsy
// non empty string truthy
// empty array is truthy

// falsy values =
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// everything else is truthy
// some truthy
// "0", [], 'false', " ", {}, function(){} (empty function)
myobj = {};
if (Object.keys(myobj).length === 0) {
    console.log("its an empty object");
}

// false == 0    is true
// '' == false     is true

// nullish coalecing operator (??): null undefined

let val1;
// val1 = 5 ?? 10   // will assign 5
// val1 = null ?? 10   // will assign 10
// val1 = undefined ?? 11   // will assign 11

val1 = null ?? 10 ?? 20; // value assigned 10

// it assigns the first value (not null and undefined) it finds
console.log(val1);

// ternary operator

//  condition ? true : false

const iceprice = 100;

iceprice >= 80 ? console.log("not buy") : console.log("buy");