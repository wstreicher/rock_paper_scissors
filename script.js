function getComputerChoice() {
    let choice;
    const choices = ["rock", "paper", "scissors"];
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase()
    if ((player == "rock" && computerSelection == "rock") || (player == "scissors" && computerSelection == "scissors") || (player == "paper" && computerSelection == "paper")) {
        console.log("You tied!");
    } else if ((player == "paper" && computerSelection == "rock") || (player == "scissors" && computerSelection == "paper") || (player == "rock" && computerSelection == "scissors")) {
        console.log("You win! " + player + " beats " + computerSelection)
        return true
    } else {
        console.log("You lose! " + computerSelection + " beats " + player)
        return false
    }
  }

function game() {
    let playerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Rock, Paper, or Scissors?"));
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if (winner == true) {
            playerWins += 1
        } else {
            continue
        }
     }
     return "You won " + playerWins + " games out of 5." 
}