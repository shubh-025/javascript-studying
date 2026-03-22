let rand = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const val = parseInt(userInput.value)
        // console.log(val);
        
        validateGuess(val);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1) {
        alert('entered number less than 1')
    }
    else if(guess>100){
        alert('entered number greater than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`game over , random number was ${rand} `)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === rand){
        displayMessage('u guessed it right')
        endGame()
    } else if(guess < rand){
        displayMessage('Number is too low')
    } else {
        displayMessage('number is too high')
    }

}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    numGuesses++
    remaining.innerHTML = `${11-numGuesses}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    playGame = false
    startover.appendChild(p)
    newGame()
}

function newGame(){
   const newgamebutton = document.querySelector('#newGame')
   newgamebutton.addEventListener('click',function(e){
    rand = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuesses}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
    playGame = true
   })
}

