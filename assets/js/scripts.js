// Select all memory cards from the DOM
const cards = document.querySelectorAll('.memory-card');

// Initialize game state variables
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let gameStarted = false;
let matchedPairs = 0;

function flipCard() {
    if (!gameStarted) {
        alert('Kindly press START to initiate the game. Your fate awaits!');
        return;
    }
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // second click
    secondCard = this;
    checkForMatch();
}

// Check if two flipped cards match
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        if (lives > 0) {
            lives--;
        }
        updateLivesDisplay();

        if (lives === 0) {
            gameOver();
        }

        resetBoard();
    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}


const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
const livesDisplay = document.getElementById('lives');

let timeLeft = 60;
let lives = 5;
let timerInterval;

startButton.addEventListener('click', startGame);

function startGame() {
    gameStarted = true;
    cards.forEach(card => card.addEventListener('click', flipCard));
    clearInterval(timerInterval);
    lives = 5;
    timeLeft = 60;
    cards.forEach(card => card.classList.remove('flip'));
    cards.forEach(card => card.addEventListener('click', flipCard));
    shuffle();
    updateLivesDisplay();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timerInterval);
            timerDisplay.textContent = "0s";
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(timerInterval);
    alert('Game Over, stupid human! HAHAHAHA!');
}

function updateLivesDisplay() {
    livesDisplay.textContent = `Life: ${lives}`;
}

document.addEventListener('DOMContentLoaded', function () {
    shuffle();
});

// Function “disableCards”, increase the counter and check for profit
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedPairs++;
    if (matchedPairs === cards.length / 2) {
        gameWon();
    }
    resetBoard();
}

function gameWon() {
    clearInterval(timerInterval);
    alert('Your save the World!');
}
