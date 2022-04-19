let playerScore = 0;
let computerScore = 0;

let playerSelection = null;
let computerSelection=null;

let resultsDiv = document.querySelector('.resultsDiv');
let playerScoreDiv = document.querySelector('#playerScoreDiv');
let computerScoreDiv = document.querySelector('#computerScoreDiv');
let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
let computerScoreDisplay = document.querySelector('#computerScoreDisplay');

let resultsDisplay = document.querySelector('#roundResult');

function updateScore() {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function computerPlay() {
    let num = Math.floor(Math.random() *3); //returns a num: 0,1, or 2
    
    if (num ===0){
        
        return "Rock";
    }     
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

    while (playerSelectionDiv.hasChildNodes()){
        playerSelectionDiv.removeChild(playerSelectionDiv.children[0]);
    }
    
    if (playerSelection == "Rock" && computerSelection == "Rock"){
        updateScore();
        resultsDisplay.textContent = "It's a tie! You both chose Rock.";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        updateScore();
        resultsDisplay.textContent = "You Lose! Paper beats Rock."; 
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Win! Rock beats Scissors.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Win! Paper beats Rock.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper"){
        updateScore();
        resultsDisplay.textContent =  "It's a tie! You both chose Paper.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Lose! Rock beats Scissors.";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Win! Scissors beats Paper.";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        updateScore();
        resultsDisplay.textContent =  "It's a tie! You both chose Scissors.";
    }
    else return "Are you sure you entered 'Rock,' 'Paper,' or 'Scissors?'";
}

const rButton = document.querySelector('#rockButton');
const pButton = document.querySelector('#paperButton');
const sButton = document.querySelector('#scissorsButton');

rButton.addEventListener('click', () => {
    playRound("Rock", computerPlay());
    var playerRock = document.createElement('img');
    playerRock.src="playerRock.png";
    playerSelectionDiv.appendChild(playerRock);
});

pButton.addEventListener('click', () => {
    playRound("Paper", computerPlay());
    var playerPaper = document.createElement('img');
    playerPaper.src="playerPaper.png";
    playerSelectionDiv.appendChild(playerPaper);
});

sButton.addEventListener('click', () => {
    playRound("Scissors", computerPlay());
    var playerScissors = document.createElement('img');
    playerScissors.src="playerScissors.png";
    playerSelectionDiv.appendChild(playerScissors);
});

const playerSelectionDiv = document.querySelector('#playerSelectionDiv');
const computerSelectionDiv = document.querySelector('#computerSelectionDiv');


