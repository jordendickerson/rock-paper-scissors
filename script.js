//set the possible plays
let plays = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');
const resultsText = document.createElement('p');
const scoreText = document.createElement('h3');

resultsText.textContent = "Press a button to play!"
scoreText.textContent = String(playerScore) + ' - ' + String(computerScore);

resultsDiv.appendChild(resultsText);
scoreDiv.appendChild(scoreText);

// have the computer choose a play
function computerPlay(){
    return plays[Math.floor(Math.random() * plays.length)];
}
//plays a round
function playRound(playerSelection, computerSelection){
    let playerSelected = playerSelection.toLowerCase();
    let computerSelected = computerSelection.toLowerCase();

    if(playerSelected === computerSelected){
        resultsText.textContent = "You both chose "+playerSelected+"! It's a tie!";
    }
    else if (playerSelected === "rock"){
        if (computerSelected === "paper"){
            resultsText.textContent = "You lose! Paper beats rock!";
            computerScore += 1;
        }
        else if (computerSelected === "scissors"){
            resultsText.textContent = "You win! Rock beats scissors!";
            playerScore += 1;
        }
    }
    else if (playerSelected === "paper"){
        if (computerSelected === "scissors"){
            resultsText.textContent = "You lose! Scissors beats paper!";
            computerScore += 1;
        }
        else if (computerSelected === "rock"){
            resultsText.textContent = "You win! Paper beats rock!";
            playerScore += 1;
        }
    }
    else if (playerSelected === "scissors"){
        if (computerSelected === "paper"){
            resultsText.textContent = "You win! Scissors beats paper!";
            playerScore += 1;
        }
        else if (computerSelected === "rock"){
            resultsText.textContent = "You lose! Rock beats scissors!";
            computerScore += 1;
        }
    }
    else{
        resultsText.textContent = "Something went wrong!";
    }
    scoreText.textContent = String(playerScore) + ' - ' + String(computerScore);
    if (playerScore >= 5){
        resultsText.textContent = "Player wins!";
    }else if(computerScore >= 5){
        resultsText.textContent = "Computer wins!";
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5){
            playerScore = 0;
            computerScore = 0;
        }
        playRound(button.id, computerPlay());
    });
});