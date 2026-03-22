// ... REST operator (also known as pread operator)
// when no. of arguments not known

function cartPrice(...num1) {
  return num1;
}

console.log(cartPrice(200, 300, 150));

const user = {
    username: "shubh",
    price: 200
}

function handleObject( anyObj ){
  console.log(`user name is ${anyObj.username} and price is ${anyObj.price}`);
  
}

// have to be careful wether the checking object type is present or not ( price or prices )

const newArr = [200,100,300,500]

function returnSecondValue( arr ){
    return arr[1];
}

console.log(returnSecondValue(newArr));
