let playerWinCount = 0;
let computerWinCount = 0;

/* Generate computer choice */
let computerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/* Player choice */
function playerChoice(selectionClick) {
    while (true){
      let playerSelection = selectionClick;
      playerSelection = playerSelection.toLowerCase();
      return playGame(playerSelection, computerChoice())
    }  
  }
  

/* End game */
function endGame(result) {
    if (result == "player") {
        document.getElementById('results').textContent = "Congrats! You are the winner! Play Again!";
        document.getElementById('scoreboard').innerHTML = `Final Score: Player: ${playerWinCount} | Computer: ${computerWinCount}`;
        document.getElementById('reset').innerHTML = "Play Again";
    }
    else if (result == "computer") {
        document.getElementById('results').textContent = "Oh no! You are the loser! Better luck next time!";
        document.getElementById('scoreboard').innerHTML = `Final Score: Player: ${playerWinCount} | Computer: ${computerWinCount}`;
        document.getElementById('reset').innerHTML = "Play Again";
    }
}

/* Play a round of RPS */
function playGame(playerSelection, computerChoice) {

/* If player choose rock */
    if (playerSelection == "rock" && (playerWinCount != 5 && computerWinCount != 5)) {
       
        // Clear player, computer and results divs
        document.getElementById('player-selection').textContent = "";
        document.getElementById('computer-selection').textContent = "";
        document.getElementById('results').textContent = "";

        switch(computerChoice) {
            case "rock":
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose ROCK";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose ROCK";
                }, 1000);
                setTimeout(function(){
                    document.getElementById('results').textContent = "It's a tie!";
                }, 1500);
                return;
            case "paper":
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose ROCK";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose PAPER";
                }, 1000);
                setTimeout(function() {
                    document.getElementById('results').textContent = "You lose! Paper beats Rock";
                    computerWinCount++;
                    document.getElementById('scoreboard').innerHTML = `Player: ${playerWinCount} | Computer: ${computerWinCount}`; 
                }, 1500);
                setTimeout(function() {
                    if (playerWinCount == 5) {
                        endGame("player");
                    }
                    else if (computerWinCount == 5) {
                        endGame("computer"); 
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;
            case "scissors":
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose ROCK";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose SCISSORS";
                }, 1000);
                setTimeout(function() {
                    document.getElementById('results').textContent = "You win! Rock beats Scissors";
                    playerWinCount++;
                    document.getElementById('scoreboard').innerHTML = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
                }, 1500);
                setTimeout(function() {
                    if (playerWinCount == 5) {
                        endGame("player");
                    }
                    else if (computerWinCount == 5) {
                        endGame("computer"); 
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;
        }
    }

    // If players choice is paper
    else if (playerSelection == "paper" && (playerWinCount != 5 && computerWinCount != 5)) {

        // Clear player, computer and results divs
        document.getElementById('player-selection').textContent = "";
        document.getElementById('computer-selection').textContent = "";
        document.getElementById('results').textContent = "";

        switch(computerChoice) {
            case "paper": 
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose PAPER";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose PAPER";
                }, 1000);
                setTimeout(function(){
                    document.getElementById('results').textContent = "It's a tie!";
                }, 1500);
                return;
            case "rock":
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose PAPER";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Comptuer chose ROCK";
                }, 1000);
                setTimeout(function() {
                    document.getElementById('results').textContent = "You win! Paper beats Rock";
                    playerWinCount++;
                    document.getElementById('scoreboard').innerHTML = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
                }, 1500);
                setTimeout(function() {
                    if (playerWinCount == 5) {
                        endGame("player");  
                    }
                    else if (computerWinCount == 5) {
                        endGame("comptuer");  
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;
            case "scissors":
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose PAPER";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose SCISSORS";
                }, 1000); 
                setTimeout(function() {
                    document.getElementById('results').textContent = "You lose! Scissors beats Paper";
                    computerWinCount++;
                    document.getElementById('scoreboard').innerHTML = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
                }, 1500); 
                setTimeout(function() {
                    if (playerWinCount == 5) {
                        endGame("player");  
                    }
                    else if (computerWinCount == 5) {
                        endGame("computer");  
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;           
        }
    }

    // If players choice is scissors
    else if (playerSelection == "scissors" && (playerWinCount != 5 && computerWinCount != 5)){

        // Clear player, computer and results divs
        document.getElementById('player-selection').textContent = "";
        document.getElementById('computer-selection').textContent = "";
        document.getElementById('results').textContent = "";

        switch(computerChoice) {
            case "scissors": 
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose SCISSORS";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Comptuer chose SCISSORS";
                }, 1000);
                setTimeout(function() {
                    document.getElementById('results').textContent = "It's a tie!";
                }, 1500);
                return;
            case "rock": 
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose SCISSORS";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose ROCK";
                }, 1000); 
                setTimeout(function() {
                    document.getElementById('results').textContent = "You lose! Rock beats Scissors";
                    computerWinCount++;
                    document.getElementById('scoreboard').innerHTML = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
                }, 1500); 
                setTimeout(function() {
                    if (playerWinCount == 5) {
                        endGame("player");
                        return; 
                    }
                    else if (computerWinCount == 5) {
                        endGame("computer");
                        return; 
                    }
                    else {
                        return; 
                    }
                }, 2000); 
                return;  
            case "paper":
                setTimeout(function() {
                    document.getElementById('player-selection').textContent = "You chose SCISSORS";
                }, 500);
                setTimeout(function() {
                    document.getElementById('computer-selection').textContent = "Computer chose PAPER";
                }, 1000);
                setTimeout(function() {
                    document.getElementById('results').textContent = "You win! Scissors beats Paper";
                    playerWinCount++;
                    document.getElementById('scoreboard').innerHTML= `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
                }, 1500);
                setTimeout(function() {
                    if (playerWinCount == 5) {
                        endGame("player");
                        return;  
                    }
                    else if (computerWinCount == 5) {
                        endGame("computer");
                        return; 
                    }
                    else {
                        return; 
                    }
                }, 2000); 
                return;      
        }
    }
    else {
        return;
    }
    
}

function resetGame() {

    playerWinCount = 0;
    computerWinCount = 0;

    /* DOM Reset */
    document.getElementById('player-selection').textContent = "";
    document.getElementById('computer-selection').textContent = "";
    document.getElementById('results').textContent = "Play Again!";
    document.getElementById('scoreboard').innerHTML= `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    document.getElementById('reset').textContent = "Reset Game";
}

// Add event listener to reset button
const reset = document.querySelector("reset");

