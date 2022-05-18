// computer "player" picks a random choice of 'rock, paper or scissors//
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// function to play a round//
function playRound(playerSelection) {
// call computerPlay() and store in a variable //
    let computerSelection = computerPlay()
    console.log(computerSelection);
// ask play from input and store in parameter//
    playerSelection = prompt('Rock, Paper or Scissors?');
    console.log(playerSelection);
    
 // player win conditions//   
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
        alert('You win!' + playerSelection + ' beats ' + computerSelection);
    }
// if both computer player and player have same result
    else if (playerSelection == computerSelection) {
        alert('Try again, Its a tie!');
    }
// when computer wins // 
    else  
    {
        alert('You lose!' + computerSelection + ' beats ' + playerSelection);
    }
}

 playRound()
