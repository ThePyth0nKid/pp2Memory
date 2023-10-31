// Select all memory cards from the DOM
const cards = document.querySelectorAll('.memory-card');

// Game control elements
const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
const livesDisplay = document.getElementById('lives');

let timeLeft = 60;
let lives = 5;
let timerInterval;

// Initialize game state variables
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let gameStarted = false;
let matchedPairs = 0;

// Function to handle card flipping with two arguments
function flipCard(cardElement, immediateFlip) {
    if (immediateFlip) {
        cardElement.classList.add('flip');
        return;
    }

    // Prevent flipping if game hasn't started
    if (!gameStarted) {
        alert("Kindly press 'START' to initiate the game. Your fate awaits!");
        return;
    }
    // Ignore click if board is locked or the same card is clicked
    if (lockBoard) return;
    if (cardElement === firstCard) return;
    // Add flip class to the clicked card
    cardElement.classList.add('flip');
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = cardElement;
        return;
    }
    // second click
    secondCard = cardElement;
    checkForMatch();
}

// Check if two flipped cards match
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

// Function to handle matched cards
function disableCards() {
    // Increase match counter and check for win
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

// Function to unflip cards if they don't match
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        // Decrement lives on incorrect match
        if (lives > 0) {
            lives--;
        }
        updateLivesDisplay();
        if (lives === 0) {
            gameOver();
        }
        // End game if out of lives
        resetBoard();
    }, 1500);
}

// Add flip event listener to each card
cards.forEach(card => card.addEventListener('click', () => flipCard(card, false)));

// Function to reset the board state
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Function to shuffle the cards
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

// Event listener to start the game
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
    gameStarted = true;
    cards.forEach(card => card.addEventListener('click', () => flipCard(card, false)));
    clearInterval(timerInterval);
    lives = 5;
    timeLeft = 60;
    cards.forEach(card => card.classList.remove('flip'));
    shuffle();
    updateLivesDisplay();
    startTimer();
}

// Function to start the game timer
function startTimer() {
    timerInterval = setInterval(function () {
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

// Function to handle game over scenario
function gameOver() {
    clearInterval(timerInterval);
    alert("Game Over, stupid human! HAHAHAHA!");
}

// Function to update the display of remaining lives
function updateLivesDisplay() {
    livesDisplay.textContent = `Life: ${lives}`;
}

// Shuffle cards when DOM content is fully loaded
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

// Function called when all pairs are matched
function gameWon() {
    clearInterval(timerInterval);
    alert('You save the World!');
}
