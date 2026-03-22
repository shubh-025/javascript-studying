// for of loop

// these type of loops are array specific loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// similar to auto in c++
for (const it of arr) {
    console.log(it);
}

const greeting = "hello world"

for (const c of greeting) {
    if(c==' ') continue
    console.log(`each char is ${c}`);
    
}

// maps

const mp = new Map()
mp.set('in','india')
mp.set('ch','china')
mp.set('fr','france')

console.log(mp);

for (const it of mp) {
    console.log(it); //[ 'in', 'india' ]
    
}
for (const [key,value] of mp) {
    console.log(key,"=",value);
    
}

// object is not iteratible like this so easily
// there are other ways

