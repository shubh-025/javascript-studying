// building objects using constructor


const tinderUser = new Object()
// const tinderUser = {} // same thing

console.log(tinderUser) // {} empty object

tinderUser.id = "123"
tinderUser.name = "inshi"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);
// { id: '123', name: 'inshi', isLoggedIn: false }

const regularUser = {
    email: "abc.gmail.com",
    fullname: {   //nesting objects
        userfullnam: {
            firstname: "shubh",
            lastname: "sharma"        
        }
    }
}

//console.log(regularUser.fullname.userfullnam.lastname);

//console.log(regularUser.fullname?.userfullnam); // ? used to say if this is there then access (useful during api calls ) 

// merging or combining objects like we did with arrays

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "b"
}

const obj3 = {obj1 ,obj2}
// console.log(obj3);
// not so good way and problematic

const obj4 = Object.assign(obj1,obj2)
// this will copy obj2 in obj1 , change obj1
// console.log(obj1,obj2);

// if u want to copy in a new then
const obj5 = Object.assign({},obj1,obj2)

// console.log(obj5);

// best way to do this
// same as array

const obj6 = {...obj1,...obj2}
// console.log(obj5);


// array of objects

const users = [
    {
        id: 1,
        email: "abc"
    },
    {
        id: 2,
        email: "abc"
    }
]

// to iterate through this array

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
// gives array of keys of the object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// gives array of arrays having key and value

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



