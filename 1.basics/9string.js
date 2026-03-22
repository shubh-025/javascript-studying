// ' ' and " " means same thing

const name = "shubh"
const repo = "42"

console.log(name + repo) // avoid using that

// try using back ticks `` it does string interpolation
console.log(`hello my name is ${name} and my repo count is ${repo}`)

// another way to declare string
// type of this string is object and u get a lot of methods with it
const game = new String('gta')

console.log(game[0]);//g
console.log(name[0]);//s
console.log(game.__proto__);//{}
console.log(game.length);//3
console.log(game.toLocaleUpperCase());//GTA but it doesnt change the original string

// strings are immutable (non changable) once they created in js unlike c++ and hence these methods return u a copy after doing the manipulations

console.log(game.charAt(2));//a
console.log(game.indexOf('t'));//1
console.log(name.indexOf('h'));//1

const newstr = game.substring(0,2) //0 will be there but 2 wont be there
console.log(newstr);

const newstr2 = game.slice(1,2) // may also give negative values
console.log(newstr2);

// .trim() removes starting and end spaces , also there is trim start and trim end

// browser replaces space with % in url , so use .replace()
// url.replace('%20','-')

//.includes('xyz') returns true or false if it has that keyword

//if u want to convert string into array based on (- , % , or anything)
// .split(' ') split in terms of spaces
// .split(seperator , limit) input parameters

// go through mdn documentation to go through the methods of string as strings are highly useful in js , backend and much more

