let playerScore = 0;
let computerScore = 0;

let playerSelection = null;
let computerSelection= null;

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

function checkForWinner() {

    let endGameText;

    if(playerScore == 5) {
        endGameText = document.createTextNode(" Congratulations! You won the game with the best out of 5 rounds.");
        resultsDisplay.appendChild(endGameText);
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        endGameText = document.createTextNode(" Better luck next time! The computer wins with the best out of 5 rounds.");
        resultsDisplay.appendChild(endGameText);
        playerScore = 0;
        computerScore = 0;
    } 
}

function computerPlay() {
    let num = Math.floor(Math.random() *3); //returns a num: 0,1, or 2
    
    while(computerSelectionDiv.hasChildNodes()){
        computerSelectionDiv.removeChild(computerSelectionDiv.children[0]);
    }

    if (num ===0){
        var computerRock = document.createElement('img');
        computerRock.src="rock.png";
        computerSelectionDiv.appendChild(computerRock);
        return "Rock";
    } else if (num === 1){ 
        var computerPaper = document.createElement('img');
        computerPaper.src="paper.png";
        computerSelectionDiv.appendChild(computerPaper);
        return "Paper";
    } else {
        var computerScissors = document.createElement('img');
        computerScissors.src="scissors.png";
        computerSelectionDiv.appendChild(computerScissors);
        return "Scissors";
    }
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
        resultsDisplay.textContent = "It's a tie! You both chose Rock.";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        updateScore();
        resultsDisplay.textContent = "You Lose! Paper beats Rock.";
        checkForWinner(); 
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Win! Rock beats Scissors.";
        checkForWinner();
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Win! Paper beats Rock.";
        checkForWinner();
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper"){
        resultsDisplay.textContent =  "It's a tie! You both chose Paper.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Lose! Scissors beats Paper.";
        checkForWinner();
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Lose! Rock beats Scissors.";
        checkForWinner();
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        updateScore();
        resultsDisplay.textContent =  "You Win! Scissors beats Paper.";
        checkForWinner();
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
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