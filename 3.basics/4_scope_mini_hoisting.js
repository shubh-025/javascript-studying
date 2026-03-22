function one(){
    const user = "shubh"
    
    function two(){
        const website = "youtube"
        console.log(user);
        
    }
    // console.log(website);
    // two()
    
}

one()

// similar things happens with if else scope {}


// ************* interesting ********************

console.log(addone(6))//can do before declaration

function addone ( num ){
    return num + 1
}   // function

// addtwo(5) cant do this as we are storing fun in a variable
const addtwo = function(num){
    return num + 2
}  // function but also called expression
// we are making a variable hold a function

addtwo(6)