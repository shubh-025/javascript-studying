const user = {
  username: "shubh",
  price: 1000,

  welcomeMsg: function () {
    console.log(`${this.username} ,welcome to website`);
    //console.log(this); // whole object prints
  },
};
// this is used to point to the scope of current context

user.welcomeMsg; // nothing comes
user.welcomeMsg(); // now shows message to shubh
user.username = "sam";
user.welcomeMsg(); // shows msg to sam

// making function in object helps us retain the context dynamically

console.log(this); // {} this is printed as we are in node environment

// when u do this in browser , you will see things like windows ..... smthng

function chai() {
  let user = "shubh";
  //console.log(this); 
  // // u will get a lot of stuff
  console.log(this.user); // will give undefined
}
chai();


const coffee = function(){
    let user = "vanshi"
    console.log(this.user) // undefined
}
coffee()

// arrow function

const kabab = () => {
    let user = "tholu"
    console.log(this); // {}
    console.log(this.user) // undefined
    
}
kabab()

// difference in the arrow function this is that that the arrow function looks up towards the outer scope (what this outer scope has and return that)


// more discussion on arrow function

const addTwo = (num1,num2) => {
    return num1+num2
}

// implicit return function
const addOne = (num1) => num1+1
// or
// implicit return function
// const addOne = (num1) => (num1+1)

// if u just write without bracket or wrap them in () it just returns that 
// but if u used {} then have to write return

// if want to return object implicitly
// const addOne = (num1) => ({declare object})


console.log(addTwo(5,6));
console.log(addOne(5));
