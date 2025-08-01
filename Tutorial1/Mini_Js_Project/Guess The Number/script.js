let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
    // Validate if the input is between 1-10
    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Enter a valid number between 1 and 10");
    } else {
      prevGuess.push(guess);
      displayGuess(guess);
      checkGuess(guess); // Check the guess before ending the game
  
      if (numGuess === 6 && guess !== randomNumber) { // Check if it's the last guess
        displayMsg(`Game Over. Random Number Was ${randomNumber}`);
        endGame();
      }
    }
  }
  

function checkGuess(guess) {
  //it checks if it is correct
  if (guess === randomNumber) {
    displayMsg("You guessed it right!");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("Number is too low");
  } else if (guess > randomNumber) {
    displayMsg("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `; // correctly appending guesses
  numGuess++;
  remaining.innerHTML = `${6 - numGuess}`; // updating remaining guesses
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", true); // disable the input field
  p.classList.add("button");
  p.innerHTML = '<h2 id="newgame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgamebtn = document.querySelector("#newgame");
  newgamebtn.addEventListener("click", function () {
    // Reset the game settings properly
    randomNumber = parseInt(Math.random() * 10 + 1); // update global randomNumber
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''; // correctly clear previous guesses
    remaining.innerHTML = `${6 - numGuess}`; // reset remaining guesses
    lowOrHi.innerHTML = ''; // clear the message
    userInput.removeAttribute('disabled'); // re-enable input field
    startOver.removeChild(p); // remove the new game button
    playGame = true;
  });
}
