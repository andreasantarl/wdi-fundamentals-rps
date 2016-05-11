////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	if (move !== (undefined || null)) {
		move = move;
	} else {
		move = getInput();
	}		
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
	if (move !== (undefined || null)) {
		move = move;
	} else {
		move = randomPlay();
	}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
	if (playerMove === ‘rock’ && computerMove === ‘scissors’) {
		winner = ‘player’;
	} else if (playerMove === ‘scissors’ && computerMove === ‘paper’) {
		winner = ‘player’;
	} else if (playerMove === ‘paper’ && computerMove === ‘rock’) {
		winner = ‘player’;
	} else if (playerMove === computerMove) {
		winner = ‘tie’;
	} else {
		winner = ‘computer’
	}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {	
	getComputerMove();
	getPlayerMove();
	getWinner();
	console.log (“Player chose “ + playerMove + “ while Computer chose “ + computerMove);
	console.log (“The current score is  “ + playerWins + “ for the player and “ + computerWins + “ for the computer”);
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

