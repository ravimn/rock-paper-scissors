console.log("Hello World")
getComputerChoice();

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