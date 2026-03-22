// javascript execution context-------

// 1. global execution context {} is created and stored in "this"
// in browser this has windows context
// js is single threaded , this is also executed in thread

// 2. function execution context

// 3. eval execution context (property of global object)


// then we have phases

// phase 1 = memory creation phase (memory allocated for variables and all)
// phase 2 = execution phase (all the operations are executed here)


let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1 +num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)

// lets see how this code runs
// steps

// 1. global execution (or global environment) , this is the first thing that is created and allocated to "this"

// 2. memory creation phase 
// val1 -> undefined
// val2 -> undefined
// addnum -> fn defination
// result1 -> undefined
// result2 -> undefined
 
// 3. execution phase
// val1 <- 10
// val2 <- 5

// imp 

//  addnum -> (creates its own executional context)  {
 //  within this , a new variable environment and new execution thread is created (or allocated)
//  again memory creation phase (val1,val2,total undefined)
//  and again execution phase(num1,num2,total) 
// and finally total is returned to parent execution context 
// }

// after completing its work this functions executional context is deleted

// result1 <- gets the value returned by fn

// 4. again same thing as step 3 is repeated , again the new variable environment of the function is created and so on ........



// call stack 

// in the bottom we have global execution context , and as the functions are called they are pushed on stack and as they are done executing they gets deleted 

// u can look at call stack in browser in sources tab