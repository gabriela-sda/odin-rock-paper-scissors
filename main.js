// retorna, de forma aleatória, uma das strings: "rock", "paper" ou "scissors"
function getComputerChoice() {
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

function getHumanChoice() {
    return prompt("Digite uma das opções: rock, paper ou scissors.", "");
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice === "rock") {
        if(humanChoice === "rock") {
            return alert("Empate! Ambos jogadores escolheram pedra.");
        }
        else if(humanChoice == "paper") {
            humanScore++;
            return alert("Você ganhou! Papel vence pedra.");
        }
        else {
            computerScore++;
            return alert("Você perdeu! Pedra vence tesoura.");
        }
    }
    else if(computerChoice === "paper") {
        if(humanChoice === "rock") {
            computerScore++;
            return alert("Você perdeu! Papel vence pedra.");
        }
        else if(humanChoice == "paper") {
            return alert("Empate! Ambos jogadores escolheram papel.");
        }
        else {
            humanScore++;
            return alert("Você ganhou! Tesoura vence papel.");
        }
    }
    else {
        if(humanChoice === "rock") {
            humanScore++;
            return alert("Você ganhou! Pedra vence tesoura.");
        }
        else if(humanChoice == "paper") {
            computerScore++;
            return alert("Você perdeu! Tesoura vence papel.");
        }
        else {
            return alert("Empate! Ambos jogadores escolheram tesoura.");
        }
    }
}

let computerScore = 0;
let humanScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice().toLowerCase();
playRound(computerSelection, humanSelection);