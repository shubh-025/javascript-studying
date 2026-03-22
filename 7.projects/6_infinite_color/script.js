//  generate raqndom color

// we have rgb each component goes from 00 to ff(256)
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        // generate random index to pick a no in hex
        color += hex[Math.floor(Math.random()*16)]
    }

    return color;
}

let intervalId;

const startchangingcolor = function() {
    // 2. Safety check: Prevent multiple intervals from running at once
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

const stopchangingcolor = function() {
   clearInterval(intervalId)
   intervalId = null
};


document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)


