function func_name() {
  console.log("s");
  console.log("h");
  console.log("u");
  console.log("b");
  console.log("h");
}

func_name; // this is the reference to func
func_name(); // this is us executing func

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers() // Nan
addTwoNumbers(5 , 6) // 11
addTwoNumbers(5 , "6") // 56
addTwoNumbers(5 , "b") // 5b
addTwoNumbers(5 , null) // 5

// naming convention 
// parameters are those declared in () in func
// arguments are the values that we pass while calling the func

const res = addTwoNumbers(4,9)
console.log(res) 
// undefined (as nothing is returned)


function addTwoNumbers2(num1, num2) {
  let result = num1+num2
  return result
  
  console.log("shubh") // wont run nothing after return
  
}

const res2 = addTwoNumbers2(6,9)
console.log(res2) 


function userloginmessage(username) {
  // if(username === undefined){
  //   console.log('please enter a username');
  // }
  return `${username} just logged in`
}

// or give username = "default" for case when nothing given (if given overwrite)

let msg = userloginmessage("shubh")// no print on this statement
console.log(msg);

// what will happpen if no value passed 
console.log(userloginmessage())// undefined just logged in




