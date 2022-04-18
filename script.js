let playerScore = 0;
let computerScore = 0;

let playerScoreDiv = document.querySelector('#playerScoreDiv');
let computerScoreDiv = document.querySelector('#computerScoreDiv');
let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
let computerScoreDisplay = document.querySelector('#computerScoreDisplay');


function updateScore() {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    console.log("Player" + playerScore);
    console.log("Computer" + computerScore);
}

function computerPlay() {
    let num = Math.floor(Math.random() *3); //returns a num: 0,1, or 2
    
    if (num ===0) return "Rock";
    else if (num === 1) return "Paper";
    else return "Scissors";
}

function capitalize(string) {
    let newString = string.toLowerCase();
    let firstLetter = newString.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let finalString = firstLetter + newString.slice(1);
    return finalString;    
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    
    if (playerSelection == "Rock" && computerSelection == "Rock"){
        updateScore();
        return "It's a tie! You both chose 'Rock.' The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        updateScore();
        return "You Lose! Paper beats Rock. The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
        updateScore();
        return "You Win! Rock beats Scissors. The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
        updateScore();
        return "You Win! Paper beats Rock. The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper"){
        updateScore();
        return "It's a tie! You both chose 'Paper.' The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore++;
        updateScore();
        return "You Lose! Scissors beats Paper. The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore++;
        updateScore();
        return "You Lose! Rock beats Scissors. The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        updateScore();
        return "You Win! Scissors beats Paper. The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        updateScore();
        return "It's a tie! You both chose 'Scissors.' The score is player: " + playerScore + " vs. the computer: " + computerScore + ".";
    }
    else return "Are you sure you entered 'Rock,' 'Paper,' or 'Scissors?'";
}

//function game() {

 //   while (playerScore < 5 && computerScore < 5){
 //       console.log(playRound(prompt("Do you want to play 'Rock,' 'Paper,' or 'Scissors?'"), computerPlay())); 
 //   }

  //  if (playerScore === 5){
  //      return "You won the game! The score was player: " + playerScore + " vs. the computer: " + computerScore + ".";
  //  }
  //  else if (computerScore === 5){
  //      return "You lost the game. The computer won. The score was player: " + playerScore + " vs. the computer: " + computerScore + ".";
  //  }
   // else return "error";

//}

const rButton = document.querySelector('#rockButton');
const pButton = document.querySelector('#paperButton');
const sButton = document.querySelector('#scissorsButton');

rButton.addEventListener('click', () => {
    alert(playRound("Rock", computerPlay()));
});

pButton.addEventListener('click', () => {
    alert(playRound("Paper", computerPlay()));
});

sButton.addEventListener('click', () => {
    alert(playRound("Scissors", computerPlay()));
});


