let score = 0;
let rounds = 0;
const buttons = document.querySelectorAll('button');
const count = document.querySelector('.count');
const roundResult = document.createElement('p');
const result = document.querySelector('.score').appendChild(roundResult).classList.add('result');
const finalResult = document.createElement('h1');
const final = document.querySelector('.score').appendChild(finalResult);

count.textContent = score;

function getComputerChoice() {
    let choice;
    const CHOICES = ["rock", "paper", "scissors"];
    choice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return choice
};

function shutItDown() {
    buttons.forEach(button => button.remove());
};

var start = function roundStart(button) {
    playRound((button.classList.value), getComputerChoice())
};

function playRound(playerChoice, computerChoice) {
    if (rounds == 5) {
        finalResult.textContent = `Game over! You won ${score} out of 5 games.`
        score = 0;
        rounds = 0;
        shutItDown();
    } else if ((playerChoice == "rock" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "paper")) {
        roundResult.textContent = "You tied!";
        rounds += 1;
        count.textContent = score;
    } else if ((playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper") || (playerChoice == "rock" && computerChoice == "scissors")) {
        roundResult.textContent = ("You win! " + playerChoice + " beats " + computerChoice);
        score += 1;
        rounds += 1;
        count.textContent = score;
    } else {
        roundResult.textContent = ("You lose! " + computerChoice + " beats " + playerChoice);
        rounds += 1;
        count.textContent = score;
    }
}

buttons.forEach(button => button.addEventListener('click', start.bind(null, button)));