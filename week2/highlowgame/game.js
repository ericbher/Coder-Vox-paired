/* Using the High Low game template, create the necessary game.js file needed to create your own high low game on a range of 1 to 100.

Display "Higher" or "Lower" to inform the user and provide the user another opportunity to guess. 

Stretch Challenge 1: Keep track of the number of guesses the user took to get to the answer and display the number of guesses taken when the user reaches the win condition

Stretch Challenge 2: Allow the operator of the game to limit the number of user guesses by setting a constant variable named "NUM_MAX_GUESSES"
*/

/*function guessGame(){

var guessCount = 0;

var NUM_MAX_GUESSES = 10;

var randomNumber = Math.floor((Math.random() * 100) + 1);

var numberGuess = document.getElementById('guess').value;


for (var i = 0; i < NUM_MAX_GUESSES; i++){
	if (numberGuess == randomNumber) {
	document.write('You guessed the number!');
	break;
} 

else if (numberGuess > randomNumber) {
	document.write('You are too high');
	guessCount++;
	
}

else if (numberGuess < randomNumber){
	document.write('You are too low');
	guessCount++;
}

}
document.write('It took you ' + guessCount + ' out of ' + NUM_MAX_GUESSES + ' guesses.');

} */



var guessCount = 0;

var NUM_MAX_GUESSES = 10;

var randomNumber = Math.floor((Math.random() * 100) + 1);

for (var i = 0; i < NUM_MAX_GUESSES; i++){
	var numberGuess = prompt("Guess a number between 1 and 100");
	if (numberGuess == randomNumber) {
	console.log ('You guessed the number!');
	break;
} 

else if (numberGuess > randomNumber) {
	console.log ('You are too high');
	guessCount++;
}

else if (numberGuess < randomNumber){
	console.log('You are too low');
	guessCount++;
}

}

console.log('It took you ' + guessCount + ' out of ' + NUM_MAX_GUESSES + ' guesses.'); 



