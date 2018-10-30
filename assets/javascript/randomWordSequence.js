// First, our game will select a word to use

var possibleWords = ["Come As You Are","Black Hole Sun","Interstate Love Song","Killing in the Name","Scar Tissue"];
var chosenWord = possibleWords[Math.floor(Math.random() * 5)]; //Randomly picks one of the words
var answerArray = chosenWord.split(); //Splits the selected word into an array
var censoredWord = chosenWord.replace(/[a-z]/gi,"_"); //Replaces all letters in the string with an underscore