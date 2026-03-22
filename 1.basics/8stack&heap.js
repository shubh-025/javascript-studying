// in earlier languages like c , user has to allocate and deallocate memory 

// modern languages has automatic garbage collection

// There are two types of memory , STACK & HEAP
// primitive type uses stack (changes made in copy)
// non-primitive type uses heap (changes made in original)


//primitive 
let myname = "Shubh"

let anothername = myname 

console.log(anothername) // shubh

anothername = "imshie"

console.log(anothername) // imshie
console.log(myname) // shubh

//non-primitive
let user1 = {
    email: "user",
    upi: '123'
}

let user2 = user1 //this time not a copy but reference to og data in the heap

user2.email = "goober"

console.log(user1.email)//goober
console.log(user2.email)//goober
