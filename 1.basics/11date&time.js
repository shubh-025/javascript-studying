// date is there in js but not used due to some implementation issues
// use temporal (is a proposal) so use date as is right now (temporal  under work)

let mydate = new Date();
console.log(mydate); //2026-01-22T10:46:17.793Z
console.log(mydate.toString()); //Thu Jan 22 2026 16:17:08 GMT+0530 (India Standard Time) much better

// also go through other methods like toString

console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());

// to create a specific date

let newdate = new Date(2025, 0, 22, 5, 3); //months 0 indexed
console.log(newdate.toString()); //Wed Jan 22 2025 05:03:00 GMT+0530

// to specify specific formats

//mm  dd yy
let nd = new Date("01-22-2025");// if double digit month is 1 indexed
console.log(nd.toLocaleString());

// we also have time stamps in date

//let timestmp = new Date() or
let timestmp = Date.now();
console.log(timestmp); // 1769079775264 no of ms from 1 jan 1970 convention in js

console.log(nd.getTime()); // 1737484200000
// now these two values can be compared

// to convert it into seconds
console.log(Math.floor(Date.now() / 1000) - Math.floor(timestmp / 1000));

// some more methods with date

console.log(mydate.getMonth());
// similarly get year minute etc  

// a useful method
// tolocalestring  as it has lots of smthng

mydate.toLocaleString('default',
    {weekday: "long",

    }
)
// and so on and so forth we can customize the format as much as we like with long short int and many other customizations