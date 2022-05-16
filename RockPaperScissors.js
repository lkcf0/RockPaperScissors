// computer "player" picks a random choice of 'rock, paper or scissors//
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
console.log(computerPlay());
