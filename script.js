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