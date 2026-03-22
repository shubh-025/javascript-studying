// const { use } = require("react");

let myname = "hitesh    "

console.log(myname.length); // 10

// we want to built in the functionality of true length
// so we want to add a method in string object


let myheros = ['thor','captain']

let heropower = {
    thor: 'hammer',
    captain: 'shield',
    getcaptainpower: function(){
        console.log(`captain power is ${this.captain}`);
    }
}

// heropower.shubh()  no method name shubh in heropower but what if we want to inject such method

// lets try to add this method in object only (the god father)

Object.prototype.shubh = function(){
    console.log('shubh is present in all objects');
    
}

heropower.shubh()
myheros.shubh()    
// cause we added this functionality in the object only

// but what if we give this power to array only then will that power go to object

Array.prototype.heyshuh = function(){
    console.log('shubh says hello');
}

myheros.heyshuh()
// heropower.heyshuh() // error cause this power is only to arrays not objects 


// ----------------inheritence--------------------
const teacher = {
    makevideo: true
}

const teachingsupport = {
    isavailable: false
}

const tasupport = {
    makeassignment: 'js assignment',
    fulltime: true,
    __proto__: teachingsupport // now ta support has teaching supp properties
 }

const user = {
    name: 'shubh',
    mail: 'googly'
}

//  can also be given from outside

teacher.__proto__ = user  // now teacher has users properties too

// but this method is quite old 

Object.setPrototypeOf(teachingsupport,teacher)
// teching support accesed properties of techer 
// teacher is parent and its property has been inherited


// --------------------------------



let anotherUser = 'imshie     '

String.prototype.truelength = function(){
    console.log(`${this}`);  // string will print
    // console.log(`${this.name}`);  // undefined
    console.log(`true length is: ${this.trim().length}`); //6
}

anotherUser.truelength()

'gawky babu   '.truelength()