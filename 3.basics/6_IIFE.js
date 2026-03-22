// IIFE = immediately invoked function expression

// we want certain functions to execute immediately
// 1.  suppose a function is connecting to db , so we want it to be on as soon as programm starts

// 2. or we dont want the global scope variables to pollute our local function scope

// function chai(){
//     console.log('DB connected')
// }
// chai()

// but how to stop pollution from global scope
// so

(function code() {      // this is named iife
  console.log("DB connected");
})();   

// to end iife we have to put ;

((name) => {        // this is iife
  console.log("db 2");  
})('shubh');

// we can pass argument and take parameter like normal function