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

const getPlayerChoice = () => {
    const selection = prompt(
        `${ROCK}, ${PAPER} OR ${SCISSORS}?`,
        ''
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice, we chose ${DEFAULT_CHOICE} for you!`);
        return;
    }
    return selection;
};

const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};

// const subtractUp = (resultHandler, ...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     resultHandler(sum);
// };
const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

combine(
    showResult.bind(this, 'The result after adding all numbers is: '),
    'ADD',
    1,
    5,
    'fsda',
    -3,
    6,
    10
);
combine(
    showResult.bind(this, 'The result after adding all numbers is: '),
    'ADD',
    1,
    5,
    2,
    6,
    80
);
combine(
    showResult.bind(this, 'The result after subtracting all numbers is: '),
    'SUBTRACT',
    1,
    2,
    5,
    8
);

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) =>
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

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChoice, playerSelection);
    } else {
        winner = getWinner(computerChoice);
    }
    // console.log(winner);
    let message = `You picked ${
        playerSelection ? playerSelection : DEFAULT_CHOICE
    } and computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});
