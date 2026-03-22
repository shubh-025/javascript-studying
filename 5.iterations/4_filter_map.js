const pr = ["js", "cpp", "ruby", "php"];

// const values = pr.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values); // undefined

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.filter(() => {}); // also takes callback fn
// or

const ret = nums.filter((num) => num > 4);
console.log(ret); // [5,6,7,8,9]

// note: if we use scope {} then we have to manually return , if one line function , then automatically reuturn

// filter does return values
// for each wasnt returning values

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

// map function
// quite similar to filter
const added = nums.map((it) => (it += 10));
console.log(added);

// Use forEach() when you want to perform "side effects"—like logging to the console, making an API call, or updating an external variable—without needing a new array back.
// it executes side effect for each item
// undefined

// Use map() when you need to change every element in an array (e.g., doubling numbers or extracting names from objects) to create a new list for further use.
// transforms every item into something else
// returns new array of same size

// Use filter() when you want to "remove" certain elements from a list based on a rule (e.g., getting only users over age 18).
// selects items based on condition
// new array with selected items

// map and filter are chainable

const newNums = nums
  .map((it) => it * 10)
  .map((it) => it + 1)
  .filter((it) => it >= 23);

console.log(newNums);
