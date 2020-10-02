const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER-WINS';

let gameIsRunning = false;
// const start = function() {
//     console.log('Game is starting');
// };

// const person = {
//     greet: function greet(){
//         console.log("Hello");

//     }
// }
// person.greet();

const getPlayerChoice = function () {
    const selection = prompt(
        `${ROCK}, ${PAPER} OR ${SCISSORS}?`,
        ''
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice, we chose ${DEFAULT_CHOICE} for you!`);
        return DEFAULT_CHOICE;
    }
    return selection;
};

const add = (a, b) => a + b;

const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice == SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;
// if (cChoice === pChoice) {
//     return RESULT_DRAW;
// }
// if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice == SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//     return RESULT_PLAYER_WINS;
// } else {
//     return RESULT_COMPUTER_WINS;
// }

const getComputerChoice = function () {
    const randomVariable = Math.random();
    if (randomVariable < 0.34) {
        return ROCK;
    } else if (randomVariable < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

startGameBtn.addEventListener('click', function startGame() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    console.log(winner);
});
