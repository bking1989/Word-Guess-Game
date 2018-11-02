// Global defined variables start here

// The opening text
var opener = document.getElementById("opener");

// Define the unorganized list that will house all of our letters
var gameBoard = document.getElementById("gameBoard");

// List of possible word choices
var cities = ["Chicago","Baltimore","Austin","Phoenix","Portland"];

// Random city chosen via random number generator
var chosenCity = cities[Math.ceil(Math.random() * 4)];

// Answer key to compare user input to
var answerKey = chosenCity.toLocaleUpperCase().split("");

// The chosen word is broken up into individual letters as HTML list items
for (var i = 0; i < answerKey.length; i++) {
    var letter = answerKey[i];
    var listItem = document.createElement("li");
    listItem.innerHTML = letter;
    listItem.classList.add("blackout");
    gameBoard.append(listItem);
};

// Set up the game interface

// Wins section
var totalWins = document.getElementById("totalWins");
var winCounter = 0;
totalWins.innerHTML = "Wins: " + winCounter;

// Losses section
var totalLosses = document.getElementById("totalLosses");
var lossCounter = 0;
totalLosses.innerHTML = "Losses: " + lossCounter;

// Guesses Left section
var totalGuesses = document.getElementById("totalGuesses");
var rmGuesses = 20;
totalGuesses.innerHTML = "Guesses Remaining: " + rmGuesses;

// Guesses Made section
var guessesMade = document.getElementById("guessesMade");
var guessCounter = [];
guessesMade.innerHTML = "Guesses Made: " + guessCounter;

// The game starts here

window.onload = function() {
    // The game starts by the user pressing any key
    document.onkeyup = function(event) {
        // If the opener hasn't been cleared, then the first keypress reveals the game interface
        if (opener.classList.contains("hide") == false) {
            opener.classList.add("hide");
            gameBoard.classList.remove("hide");
            totalWins.classList.remove("hide");
            totalLosses.classList.remove("hide");
            totalGuesses.classList.remove("hide");
            guessesMade.classList.remove("hide");
        // If the opener has already been cleared, then the keypress is registered as a variable, and the game runs its course
        } else if (opener.classList.contains("hide") && rmGuesses >= 1) {
            var userInput = event.key.toLocaleUpperCase();
            // This will check to see if any part of the word is unsolved. If there are none, then the player wins, and can reset the puzzle
            if (gameBoard.getElementsByClassName("blackout").length == 0) {
                alert("You have solved the word puzzle! Congratulations! Play again?");
                gameBoard.innerHTML = "";
                chosenCity = cities[Math.ceil(Math.random() * 4)];
                answerKey = chosenCity.toLocaleUpperCase().split("");
                for (var i = 0; i < answerKey.length; i++) {
                    var letter = answerKey[i];
                    var listItem = document.createElement("li");
                    listItem.innerHTML = letter;
                    listItem.classList.add("blackout");
                    gameBoard.append(listItem);
                };
                rmGuesses = 20;
                totalGuesses.innerHTML = "Guesses Remaining: " + rmGuesses;
                guessCounter = [];
                guessesMade.innerHTML = "Guesses Made: " + guessCounter;
            // If the user's answer doesn't match anything in the array, then they lose a guess and the answer is recorded
            } else if (answerKey.indexOf(userInput) == -1 && gameBoard.getElementsByClassName("blackout").length >= 1) {
                lossCounter++;
                totalLosses.innerHTML = "Losses: " + lossCounter;
                rmGuesses--;
                totalGuesses.innerHTML = "Guesses Remaining: " + rmGuesses;
                guessCounter.push(userInput + " ");
                guessesMade.innerHTML = "Guesses Made: " + guessCounter.join("");
            // If the user's answer matches an entry in the array, then they don't lose a guess and can continue
            } else if (answerKey.indexOf(userInput) >= 0) {
                var value = answerKey.indexOf(userInput);
                gameBoard.children[value].classList.remove("blackout");
                winCounter++;
                totalWins.innerHTML = "Wins: " + winCounter;
                rmGuesses;
                totalGuesses.innerHTML = "Guesses Remaining: " + rmGuesses;
                guessCounter.push(userInput + " ");
                guessesMade.innerHTML = "Guesses Made: " + guessCounter.join("");
            };
        // If you run out of remaining guesses, no more entries are logged, and it's game over with no restart
        } else if (opener.classList.contains("hide") && rmGuesses <= 0) {
            alert("You ran out of tries! Game over!")
        };  
    };
};