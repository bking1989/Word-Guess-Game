
    
// Global variables will be defined starting here

var openingText = document.getElementById("openingText");
var gameBoard = document.getElementById("gameBoard");
var totalWins = document.getElementById("totalWins");
var winCounter = 0;
var totalLosses = document.getElementById("totalLosses");
var loseCounter = 0;
var rmGuesses = document.getElementById("rmGuesses");
var guessCounter = 25;
var usedLetters = document.getElementById("usedLetters");

// Possible options, and the process of a random one being selected 

var possibleWords = [
    "Nirvana",
    "Sound Garden",
    "Alice In Chains",
    "Stone Temple Pilots",
    "The Smashing Pumpkins"
];
var randomNumber = Math.floor(Math.random() * 5);
var chosenWord = possibleWords[randomNumber];

// Convert our string into an array, and make a censored version

// The actual game functions will start here

window.onload = function(e) {
    document.onkeyup = function(e) {
        if (openingText.classList.contains("hide") == false) {

            // Opening screen needs to be cleared, first
            
            openingText.classList.add("hide");
            gameBoard.classList.remove("hide");
            totalWins.classList.remove("hide");
            totalWins.innerHTML = "Wins: " + winCounter;
            totalLosses.classList.remove("hide");
            totalLosses.innerHTML = "Losses: " + loseCounter;
            rmGuesses.classList.remove("hide");
            rmGuesses.innerHTML = "Guesses Remaining: " + guessCounter;
            usedLetters.classList.remove("hide");

        } else if (openingText.classList.contains("hide")) {

        }
    }
}