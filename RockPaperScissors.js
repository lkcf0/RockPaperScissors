// Score keeping variables //
let playerScore = 0;
let compScore = 0;

// computer "player" picks a random choice of 'rock, paper or scissors//
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// adding function to the buttons//
const buttons = document.querySelectorAll('input')

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

// function to play a round//
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = ""
    console.log(computerSelection);

// ask player for input and store in parameter//
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
       
        playerScore += 1
        result = ('You Win! ' + playerSelection + ' beats ' + computerSelection + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + compScore)
    
        if (playerScore == 5) {
            result += '<br><br>You win the game! Press F5 to play again'
            disableButtons()
        }
    
    }
// if both computer player and player have same result
    else if (playerSelection == computerSelection) {
        result = ('It\s a tie! You both picked ' + playerSelection + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + compScore)
    }

// when computer wins // 
    else  {
        compScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection + "<br><br>Player Score: " + playerScore + "<br>Computer score: " + compScore)

        if (compScore == 5) {
            result += '<br><br>Computer Wins! Press F5 to play again.'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return

}
