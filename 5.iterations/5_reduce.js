const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = nums.reduce(function (acc, curVal) {
  // console.log(`acc is ${acc}, curval is ${curVal}`);

  return acc + curVal;
}, 0);

// it works like a chain
// useful in adding bills in shopping cart as items are getting added

console.log(total);

// converting it into arrow functin

const tot = nums.reduce((acu, cur) => acu + cur, 0);
console.log(tot);
