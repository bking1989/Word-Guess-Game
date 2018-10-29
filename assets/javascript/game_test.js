// Defining all of the variables we're going to use as global

var opener = document.getElementById("opener");
var gameBoard = document.getElementById("gameBoard");
var totalRight = document.getElementById("totalCorrect")
var numTries = 0;
var rmGuesses = document.getElementById("rmGuesses");
var rmTotal = 20;
var totalWrong = document.getElementById("totalWrong");
var gameOver = document.getElementById("gameOver");
var userInput;
var starterBoard = ["_", "_", "_", "_", " ", "_", "_", " ", "_", "_", "_", " ", "_", "_", "_"]
var answerArray = ("Come As You Are").toLocaleLowerCase().split("");

// We start the game with the first keystroke clearing the opening screen, and setting up the game and score boards

document.onkeyup = function(e) {
    if (opener.classList.contains("hide") == false) {
        opener.classList.add("hide");
        gameBoard.classList.remove("hide");
        gameBoard.innerHTML = starterBoard.join("");
        totalRight.classList.remove("hide");
        totalRight.innerHTML += numTries;
        rmGuesses.classList.remove("hide");
        rmGuesses.innerHTML += " " + rmTotal;
        totalWrong.classList.remove("hide");

// After that, the game stars. If the key value is correct, it clears up one more spot on the board.

    } else if (opener.classList.contains("hide")) {
        var keyValue = event.chatCode || event.keyCode;
        userInput = String.fromCharCode(keyValue).toLocaleLowerCase();

// Input for "Come"
        
        if (userInput === "c" && starterBoard[0] === "_") {
            starterBoard[0] = "C";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "o" && starterBoard[1] === "_") {
            starterBoard[1] = "o";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "m" && starterBoard[2] === "_") {
            starterBoard[2] = "m";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "e" && starterBoard[3] === "_") {
            starterBoard[3] = "e";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;

 // Input for "As" 

        } else if (userInput === "a" && starterBoard[5] === "_") {
            starterBoard[5] = "A";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "s" && starterBoard[6] === "_") {
            starterBoard[6] = "s";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;

// Input for "You"

        } else if (userInput === "y" && starterBoard[8] === "_") {
            starterBoard[8] = "Y";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "o" && starterBoard[1] === "o" && starterBoard[9] === "_") {
            starterBoard[9] = "o";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "u" && starterBoard[10] === "_") {
            starterBoard[10] = "u";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;

// Input for "Are"

        } else if (userInput === "a" && starterBoard[5] === "A" && starterBoard[12] === "_") {
            starterBoard[12] = "A";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "r" && starterBoard[13] === "_") {
            starterBoard[13] = "r";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;
        } else if (userInput === "e" && starterBoard[3] === "e" && starterBoard[14] === "_") {
            starterBoard[14] = "e";
            gameBoard.innerHTML = starterBoard.join("");
            numTries++;
            totalRight.innerHTML = "Wins: " + numTries;

// If the user's input is NOT one of the correct ones, it counts against their guesses. If they run out, its 'game over'.

        } else {
            if (rmTotal > 1) {
                totalWrong.innerHTML += " " + userInput;
                rmTotal--;
                rmGuesses.innerHTML = "Remaining Guesses: " + rmTotal;
            } else {
                totalWrong.innerHTML += " " + userInput;
                rmTotal--;
                rmGuesses.innerHTML = "Remaining Guesses: " + rmTotal;
                gameOver.classList.remove("hide");
            }
        }
    }
}