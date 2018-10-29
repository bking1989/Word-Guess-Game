// First, we're globally defining our HTML elements via CSS class

var opener = document.getElementById("openingText");
var gameBoard = document.getElementById("gameBoard");
var winCount = document.getElementById("winTotal");
var guessCount = document.getElementById("remainingGuesses");
var incorrectAnswers = document.getElementById("wrongGuesses");
var letter;
var correctAnswers = ["n","i","r","v","a","n","a"];
var wrong = document.getElementById("wrongGuesses");
var newValue = document.createTextNode(" " + letter);

// If the opener has not been cleared, the first keystroke does that

if (opener.classList.contains("hide") == false) {
    document.onkeyup = function(e) {
        opener.classList.add("hide");
        gameBoard.classList.remove("hide");
        winCount.classList.remove("hide");
        guessCount.classList.remove("hide");
        incorrectAnswers.classList.remove("hide");
    }

    // Once the opening is cleared, a keystroke starts the game

} else if (opener.classList.contains("hide")) {
    document.onkeyup = function(e) {
        letter = event.key.toLowerCase();

        if (letter === "n") {
            
        }
    }
}