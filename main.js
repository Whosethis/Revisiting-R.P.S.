const choices = ["rock", "paper", "scissors"]
let winners = [];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

function startGame() {
    const selectionButtons = document.querySelectorAll("[data-selection]")
    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', e => {
          const selectionName = selectionButton.dataset.selection
          const selection = selection.find(selection => selection.name === selectionName)
          makeSelection(selection)
        })
      })
}

function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5) {
        return;
    }
    
    const computerChoice = computerSelect();
   
    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRounds(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}
function displayEnd() {
    let playerWins = winners.filter((item) =>item == "Player").length;

    if(playerWins == 5){
        document.querySelector(".winner").textContent = `You Won 5 Games, Congratulations!`
    } else {
        document.querySelector(".winner").textContent = `Sorry, the computer won 5 times.`
    }
    document.querySelector(".reset").style.display = `flex`
}

function displayRounds(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You Chose: ${playerChoice}`;
    document.querySelector(".computerChoice").textContent = `The Computer Chose: ${computerChoice}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function tallyWins() {
    let playerWins = winners.filter((item) =>item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter ((item) => item == "Tie"). length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinCounts}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinCounts}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
    document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((item) =>item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter ((item) => item == "Tie"). length;
}

function checkWins() {
    let playerWins = winners.filter((item) =>item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCounts,cWinCounts);
}