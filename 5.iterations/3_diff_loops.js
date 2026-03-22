const myobj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby on rail",
    swift: "swift by apple"
}

// we may use for in loop on this
// its not like for in is only for objects

for (const it in myobj) {
    //console.log(it);
    // // keys are getting printed
    console.log(myobj[it]);
}

const pr = ['js','cpp','ruby','php']

for (const key in pr) {
    console.log(key); // we get index(0,1,2)
    // so for in loop gives keys
    
}

// map cant be iterate using for in , as map is not iteratable like that

// one of the famous loops for array

// for each loop

pr.forEach( function (it) {
    console.log(it);
})
pr.forEach(  (it) => {
    console.log(it);
})

// or pass any other declared function
function printme(item){
    console.log(item);
    
}

pr.forEach(printme)

pr.forEach((item,index,arr)=>{
})

// now if we get array like this

// const mycoding [
//     {},
//     {},
//     {}
// ]

mycoding.forEach( (item) => {
    // console.log(item.key);
    // this way we can easily acces array of objects as mostly database returns arrays of objects
})