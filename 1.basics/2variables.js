// getting user to register and login

const accountId = 123456
let accountEmail = "shubh.com"
var accountPassword = "gawky69"
accountCity = "jaipur"

// accountId = 3  
//  cant do this as its const

accountEmail = "insha.com"
accountPassword = "missgawky"
accountCity = "Agra"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);

/* prefer not to use var
   var has function scope 
   let has block scope {}
due to issue of block scope and functional scope*/

let accountState;

// default value undefined
