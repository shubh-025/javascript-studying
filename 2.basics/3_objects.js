// one of the most imp concepts

// ways to declare object
// 1. like literal (non singleton objects)
// 2. like constructor (singleton objects)

// singleton -> when object created using constructor , then that object is one of a kind


// object literals

const mySym = Symbol("key1")

const obj = {
    name: "shubh",  //system processes as "name"
    "full name": "shubh sharma",
    age: 18,
    locn: "agra",
    isLogged: true,
    lastLogin: ["monday","saturday"],
    // mySym: "mykey1"
    [mySym]: "mykey1" //correct synatx
}  
// curly braces is the object

// ways for accesing the object
console.log(obj.locn);
console.log(obj["locn"]);

// but there is no way to access "full name" using obj." .." (cant do this)
console.log(obj["full name"]);
// hence the second method is more universal

// now if we want to use the SYMBOl as a key in the obkect

// console.log(obj["mySym"])
//  gives mykey1 but

// console.log(typeof obj["mySym"])
//   string

// for the interviews this is not the right synatx to declare a symbol as a key

// to change values of a object
obj.age = 22
console.log(obj.age);

// to freeze all the values of an object

// Object.freeze(obj)
// obj.age = 25 // wont throw any error but the values wont propagate
// console.log(obj.age);
// // console.log(obj);


// we can also add functions in the object

obj.greeting = function(){
    console.log("asalam walekum");
}

obj.greeting2 = function(){
    console.log(`hello user ${this.name}`); 
    // use 'this' to reference same object of fn

}

console.log(obj.greeting) //function (anonymous)
// we hve gotten a reference of a function
console.log(obj.greeting()) // works

console.log(obj.greeting2()) // works





