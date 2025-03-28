function getComputerChoice() {
    // retorna, de forma aleatória, uma das strings: "rock", "paper" ou "scissors"
    let choice = Math.ceil(Math.random()*30);
    if (choice >=1 && choice <= 10) {
        return "rock";
    }
    else if (choice >= 11 && choice <=20) {
        return "paper";
    }
    else if (choice >= 21 && choice <=30) {
        return "scissors";
    }
}

console.log(getComputerChoice());

