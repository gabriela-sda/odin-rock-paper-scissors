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

// retorna a string digitada pelo usuário
function getHumanChoice() {
    return prompt("Digite uma das opções: rock, paper ou scissors.", "");
    // método prompt: retorna o valor de entrada
}

function playGame() {
    let roundNumber = 0;
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        if(computerChoice === "rock") {
            if(humanChoice === "rock") {
                alert("Empate! Ambos jogadores escolheram pedra.");
            }
            else if(humanChoice == "paper") {
                humanScore++;
                alert("Você ganhou essa rodada! Papel vence pedra.");
            }
            else {
                computerScore++;
                alert("Você perdeu essa rodada! Pedra vence tesoura.");
            }
        }
        else if(computerChoice === "paper") {
            if(humanChoice === "rock") {
                computerScore++;
                alert("Você perdeu essa rodada! Papel vence pedra.");
            }
            else if(humanChoice == "paper") {
                alert("Empate! Ambos jogadores escolheram papel.");
            }
            else {
                humanScore++;
                alert("Você ganhou essa rodada! Tesoura vence papel.");
            }
        }
        else {
            if(humanChoice === "rock") {
                humanScore++;
                alert("Você ganhou essa rodada! Pedra vence tesoura.");
            }
            else if(humanChoice == "paper") {
                computerScore++;
                alert("Você perdeu essa rodada! Tesoura vence papel.");
            }
            else {
                alert("Empate! Ambos jogadores escolheram tesoura.");
            }
        }
        return roundNumber++;
    }

    while(roundNumber < 5) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice().toLowerCase();
        playRound(computerSelection, humanSelection);
    }

    if(computerScore > humanScore) {
        return alert("Fim do jogo! \nPlacar final: computador = " + computerScore + " | usuário = " + humanScore + "\nVocê perdeu.");
    }
    else if(computerScore < humanScore) {
        return alert("Fim do jogo! \nPlacar final: computador = " + computerScore + " | usuário = " + humanScore + "\nVocê ganhou.");
    }
    else {
        return alert("Fim do jogo! \nPlacar final: computador = " + computerScore + " | usuário = " + humanScore + "\nEmpate.");
    }
}

playGame();