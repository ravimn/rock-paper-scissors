console.log("Hello World")
// getComputerChoice();
// getHumanChoice();

let humanScore = 0;
let computerScore = 0;

const messageMap = new Map();
messageMap.set('paperrock', "You Win! Paper beats Rock");
messageMap.set('rockpaper', "You Lose! Paper beats Rock");
messageMap.set('scissorspaper', "You Win! Scissors beats Paper");
messageMap.set('paperscissors', "You Lose! Scissors beats Paper");
messageMap.set('rockscissors', "You Win! Rock beats Scissors");
messageMap.set('scissorsrock', "You Lose! Rock beats Scissors");

const resultMap = new Map();
resultMap.set('paperrock', 1);
resultMap.set('rockpaper', 0);
resultMap.set('scissorspaper', 1);
resultMap.set('paperscissors', 0);
resultMap.set('rockscissors', 1);
resultMap.set('scissorsrock', 0);

playGame();

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
        console.log( "Human Score is [" + humanScore + "] Computer Score is [" + computerScore + "]");     
    }
    console.log( "Final Score - Human [" + humanScore + "] Computer [" + computerScore + "]"); 

}



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("Human Choice is " + humanChoice);
    console.log("Computer Choice is " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log( "You draw! Both played " + humanChoice );
        return;
    }

    const play = humanChoice + computerChoice;
    console.log("Play is " + play);
    console.log(messageMap.get(play));

    if (resultMap.get(play) === 1) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function getComputerChoice() {
    /*
      return randomly one of the following choices - "rock", "paper", "scissors"

      Algorithm - Get a random number 0, 1 or 2
      return the string that is mapped to the random number
    */

    const symbolMap = new Map();

    symbolMap.set(0, 'rock');
    symbolMap.set(1, 'paper');
    symbolMap.set(2, 'scissors');

    const randomNumber = (Math.floor(Math.random() * 100) + 1) % 3;
    console.log("Random Number is " + randomNumber);

    const symbol = symbolMap.get(randomNumber);
    console.log("Symbol selected by computer is " + symbol);

    return symbol;

}

function getHumanChoice() {
    while(true) {
        let symbol = prompt("What is your choice - Rock, Paper or Scissors?");
        symbol = symbol.toLowerCase();
        console.log("Human selected choice is " + symbol);
    
        if (symbol === "rock" || symbol === "paper" || symbol === "scissors") {
            return symbol;
        }
        console.log("Invalid choice.  Ask user to write the choice back");
    }
}