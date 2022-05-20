// Score keeping variables //
let playerScore = 0;
let compScore =0;
let gameNum = 0;

// computer "player" picks a random choice of 'rock, paper or scissors//
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// function to play a round//
function playRound(playerSelection) {

// call computerPlay() and store in a variable //
    let computerSelection = computerPlay();
    console.log(computerSelection);

// ask play from input and store in parameter//

    playerSelection = prompt('Rock, Paper or Scissors? ' + ' Best of Five! ').toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        playerScore++;
    }
// if both computer player and player have same result
    else if (playerSelection == computerSelection) {
        alert('Try again, Its a tie!');
    }

// when computer wins // 
    else  
    {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
        compScore++;
    }

}
// loops game for 5 times // 
function gameLoop() {
    for (gameNum = 0; gameNum < 5; gameNum++) {
        playRound();
    }   
}
// declares the winner of the 5 games// 
function winner() {
    if (playerScore < compScore) {
        console.log('Computer Wins!' + ' with ' + compScore + ' points ' + ' Player Total ' + playerScore);
    }
    else if (compScore < playerScore) {
        console.log('You win!' + ' with ' + playerScore + 'points ' + ' Computer Total ' + compScore);
    }
} 
// calls the game to run and then calls the finally scores//
gameLoop();
winner();