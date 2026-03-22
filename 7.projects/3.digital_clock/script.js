const clock = document.getElementById('clock')

// or document.querySlector('#clock')



// handle how to update clock how frequently
// .we will use setInterval method

setInterval(function (){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)

// 1000 specifies after how many miliseconds due u want to update this time , 1000ms = 1s , 