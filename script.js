let humanScore = 0, computerScore = 0;
const humanCounter = document.querySelector("#humanScore"); 
const computerCounter = document.querySelector("#computerScore"); 

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    switch (ranNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
    return choice;
}

function addHumanScore() {
    let score = humanCounter.innerText;
    humanCounter.innerText = ++score;
}

function addComputerScore() {
    let score = computerCounter.innerText;
    computerCounter.innerText = ++score;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) { 
        console.log("It's a tie!");
        return;
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            addComputerScore();
        } else {
            console.log("You win! Rock beats Scissor");
            addHumanScore();
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            addComputerScore();
        } else {
            console.log("You win! Paper beats Rock");
            addHumanScore();
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissor");
            addComputerScore();
        } else {
            console.log("You win! Scissors beats Paper");
            addHumanScore();
        }
    }

    if (+humanCounter.innerText == 5) {
        alert("You win!");
    } else if (+computerCounter.innerText == 5) {
        alert("Computer wins.");
    }
}

function playRoundWithComp(playerChoice) {
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click",() => playRoundWithComp("rock"));
paper.addEventListener("click",() => playRoundWithComp("paper"));
scissors.addEventListener("click",() => playRoundWithComp("scissors"));
