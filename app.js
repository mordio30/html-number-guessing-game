console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

const inputNumber = document.querySelector("#inputNumber");
const submitButton = document.querySelector("#submitButton");
const result = document.querySelector("#result");
const guessList = document.querySelector("#guessList"); // Added to display previous guesses

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = []; // Stores guessed numbers

// submitButton.addEventListener("click", () => {
guessForm.addEventListener("submit", function(event) { event.preventDefault(); // Prevent form submission
    const userGuess = Number(inputNumber.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = "Enter a number between 1 and 100.";
        return;
    }

    attempts.push(userGuess);

    const guessItem = document.createElement("li");
    guessItem.textContent = userGuess;
    guessList.appendChild(guessItem);

    if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the correct number!";
        submitButton.disabled = true; // Disable button after winning
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Guess again.";
    } else {
        result.textContent = "Too high! Guess again.";
    }

    inputNumber.value = "";
});


