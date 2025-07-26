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

function playGame() {
    let humanScore=0, computerScore=0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) { 
            console.log("It's a tie!");
            return;
        }
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissor");
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissor");
                computerScore++;
            } else {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
        }
    }

    for (let i=0; i<5; i++) { 
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
}
