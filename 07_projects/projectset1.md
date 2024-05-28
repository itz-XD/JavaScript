# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution code

```javascript
const body = document.querySelector('body')
// console.log(buttons);
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
})

```


## project 2 solution code

```javascript
const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      guide.innerHTML = `<span>${'Under Weight'}</span>`;
    } else if (bmi <= 24.9) {
      guide.innerHTML = `<span>${'Normal Range'}</span>`;
    } else {
      guide.innerHTML = `<span>${'OverWeight'}</span>`;
    }
  }
});


```


## project 3 solution code

```javascript
const clock = document.getElementById('clock')

setInterval(() => {
  let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```


## project 4 solution code

  ```javascript
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

  ```


## Project 5 solution code

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})

```


## Project 6 solution code

```javascript


```