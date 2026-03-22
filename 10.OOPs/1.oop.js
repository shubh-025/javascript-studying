//  object literal

// in other languages classes are the base unit
// here object literal itself is the base unit

const user = {
  username: "shubh",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from db");
    // console.log(`username: ${username}`); // error
    // console.log(`username: ${this.username}`); // works

    console.log(`username: ${this}`); // current context
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // {}

// for creating user 2 u may repeat the above code again or u can use constructor functions

// const promise1 = new promise()
// const date = new Date()

// this new keyword is a constructor function used to create new context

function User(username, logInCount, isLoggedIn) {
  this.username = username; //left side is variable
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;

//   this.greeting = function(){
//     console.log(`welcome ${this.username}`)
//   }        // also allowed

  return this;  // even if we dont write it doesnt matter as it is implicitly understood
}

const userOne = User("hitesh", 12, true);
const usertwo = User('chai and code ',11,false)

// console.log(userOne);
// console.log(userone);  // overwrited by usertwo

const userthree = new User("hitesh", 12, true);
const userfour = new User('chai and code ',11,false)

console.log(userthree);
console.log(userfour);

// as u use the new keyword an empty object is created called an instance (object instance) 
// constructor function is called using new keyword, packs all the arguments in it and u gets it through this key word of that context

console.log(userthree.constructor) // [Function: User]


// one more method is there : isinstanceof 