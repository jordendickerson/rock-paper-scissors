//set the possible plays
let plays = ["Rock", "Paper", "Scissors"];
// have the computer choose a play
function computerPlay(){
    return plays[Math.floor(Math.random() * plays.length)];
}
//plays a round
function playRound(playerSelection, computerSelection){
    let playerSelected = playerSelection.toLowerCase();
    let computerSelected = computerSelection.toLowerCase();

    if(playerSelected == computerSelected){
        console.log("You both chose "+playerSelected+"! It's a tie!");
    }
    else if (playerSelected === "rock"){
        if (computerSelected === "paper"){
            console.log("You lose! Paper beats rock!");
        }
        else if (computerSelected === "scissors"){
            console.log("You win! Rock beats scissors!");
        }
    }
    else if (playerSelected === "paper"){
        if (computerSelected === "scissors"){
            console.log("You lose! Scissors beats paper!");
        }
        else if (computerSelected === "rock"){
            console.log("You win! Paper beats rock!");
        }
    }
    else if (playerSelected === "scissors"){
        if (computerSelected === "paper"){
            console.log("You win! Scissors beats paper!");
        }
        else if (computerSelected === "rock"){
            console.log("You lose! Rock beats scissors!");
        }
    }
    else{
        console.log("Something went wrong!");
    }
}
//plays a game
function game(){
    for (let i = 0; i<5; i++){
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();