// promise is a object representing promised to complete an oprxn later in future (has fetch ) we use them and not xhr (its old)

// either use async await , but in modern programming we use promises 

//  ex of oprns = cryptographic operations , file access, etc;


// promises have 3 states
// 1. pending
// 2. fulfiled
// 3. rejected


// how to build promises  (promises are created and consumed)

const promise1 = new Promise( function(resolve, reject){
    // do an async task
    //  ex: db calls, cryptography, network calls
    setTimeout(function(){

        console.log('async task is completed');
        resolve()   // connecting resolve with .then
    },1000)
})

// consumption

// .then related to resolve
promise1.then(function(){
    console.log('promise consumed');
    
})

// can do the same thing as

new Promise(function(resolve,reject){
    // do async work
    setTimeout(function(){
        console.log('async task 2');
        resolve()
        
    },1000)
}).then(function(){
    console.log('async 2 resolved');
    
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({             //pass data in resolve to send to then
            username: 'shubh',
            email: 'shubh@gmail.com'
        })
    },1000)
})

promise3.then(function(user){
    console.log(user);  // we will get the object passed through resolve above
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username: 'shubh',
                password: '1234'
            })
        }
        else {
            reject('Error: something went wrong')
        }
    },1000)
})

// promise4.then().catch()   then to resolve or catch to catch error from reject

// const username = promise4.then((user) => {
//     console.log(user);
//     return user.username
    
// })               // cant do like this will throw error

// console.log(username);


promise4.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(err){  // catch is used to catch error from reject
    console.log(err);
}).finally(() => console.log('The promise is either resolved or rejected'))   // finally runs always and after fix amount of time tells us what happened

const promise5 = new Promise( function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: 'JS',
                password: '9876'
            })
        }
        else {
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromise5 (){
    const response = await promise5   // promise 5 is an object
    console.log(response);

}     // async await doesnt catch error so easily like catch

async function consumePromise5 (){
   try {
     const response = await promise5   
    console.log(response);
   } catch (error) {
        console.log(error);
        
   }

}

consumePromise5()


// async function getAllUsers (){
//   try {
//     const respons = await fetch('https://jsonplaceholder.typicode.com/users')
    
//     // console.log(respons);
    

// //   const data = respons.json()  // takes time so await this as well
    
//     const data = await respons.json()

//   console.log(data);

//   } catch (error) {
//      console.log('E: ',error);
     
//   }
// }
// getAllUsers()


// writing this function using .then.catch instead of try catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (respons) => {
//     return respons.json()
// })
// .then( (data) => {
//     console.log(data);  
// })
// .catch( (error) => console.log('Error '))


// fetch was previously on browser but recently added to node js

// fetch starts a process to get a resource and returns us a promise b

fetch('https://api.github.com/users/shubh-025')
.then( (respons) => {
    return respons.json()
})
.then( (data) => {
    console.log(data);  
})
.catch( (error) => console.log('Error '))


// important question why response from links are coming above and the above code is printing later how ?????????

// answer : seperate queue(fetch task queue/priority queue ,,,, highest priority) for fetch operations apart from tsk queue (in which operations are added by set timeout )

// on fetch two things happens 
// 1. one runs to aquire memory for (on rejection)(on fullfilled) these are arrays
// second acceses web browser which sends network request (if any response comes it sends response to fullfilled even if error came from network (404)) , if it was unable to access network then it goes to rejection 
// once somethying comes back then the functions written in rejection or resolve are executed ....... 