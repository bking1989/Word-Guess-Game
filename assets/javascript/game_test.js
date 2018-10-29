// Defining all of the variables we're going to use as global

var opener = document.getElementById("opener");
var gameBoard = document.getElementById("gameBoard");
var totalCorrect = document.getElementById("totalCorrect")
var rmGuesses = document.getElementById("rmGuesses");
var totalWrong = document.getElementById("totalWrong");
var userInput;
var answerArray = ("Come As You Are").toLocaleLowerCase().split("");

// We start the game with the first keystroke clearing the opening screen

document.onkeyup = function(e) {
    if (opener.classList.contains("hide") == false) {
        opener.classList.add("hide");
        gameBoard.classList.remove("hide");
        totalCorrect.classList.remove("hide");
        rmGuesses.classList.remove("hide");
        totalWrong.classList.remove("hide");

// Once we have cleared the opening screen, we start the game
// Each keypress is going to be registered for a value, then compared to the array containing the answer

    } else if (opener.classList.contains("hide")) {
        var keyValue = event.chatCode || event.keyCode;
        userInput = String.fromCharCode(keyValue).toLocaleLowerCase();
        
        if (userInput === "c" && gameBoard.charAt(0) === "_") {
        }
    }
}