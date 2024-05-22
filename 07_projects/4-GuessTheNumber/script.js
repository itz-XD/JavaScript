let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.remaining');
const disMessage = document.querySelector('.disMessage');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuesses = []
let numGuesses = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('NaN _Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuesses.push(guess)
        if (numGuesses >= 10) {
            updateGuesses(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            updateGuesses(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO less`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high`)
    }
}

function updateGuesses(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuesses++;
    remainingGuesses.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) {
    disMessage.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    // p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = []
        numGuesses = 1
        guessSlot.innerHTML = ``
        remainingGuesses.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}