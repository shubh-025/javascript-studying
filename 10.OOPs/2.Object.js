// js has behaviour that if it doesnt get an answer it goes to parent or grand parents and above

const newhero = ["hulk",'spider']

// first u get methods of array if u dont get what u need then u get methods of object

//  array -> object -> null  (concept of inheritance)
//  string -> object -> null  (concept of inheritance)
//  function -> object -> null  (concept of inheritance)

function multiplyby5 (num){
    return num*5 ;
}

multiplyby5.power = 2

console.log(multiplyby5(2)); // 10
console.log(multiplyby5.power); // 2
console.log(multiplyby5.prototype); // {} , its actually this(context , properties ...) of that particular method

function creatUser (username , score){
    // this key word is also related to prototype
    this.username = username 
    this.score = score 
}

// we can also inject our own function in an object

creatUser.prototype.increment = function(){
    this.score++;
}
creatUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

const chai = creatUser('chai',25)
const tea = creatUser('tea',250)

// increment will confuse which one to increase if we just write score++


// creatUser('shubh',100).increment()  error
// chai.increment() // error cant read properties of undefined

// cause we havent told chai that we havent added 2 new methods in createuser so use new keyword

// without new keyword the above code acts like normal function and not a object

const chhai = new creatUser('shubh', 69)
chhai.printme()  // score is 69




// functionality of new keyword 




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/