let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10);
};

// console.log(generateTarget());
function compareGuesses(user, computer, target) {
    let humanGuessDifference = Math.abs(target - user);
    let computerGuessDifference = Math.abs(target - computer);
    return humanGuessDifference <= computerGuessDifference
};

function updateScore(str) {
    (str == 'human') ? humanScore++ : computerScore++;
};

function advanceRound() {
    return currentRoundNumber++;
};
