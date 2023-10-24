const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let gameStarted = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!gameStarted) {
        startGame();
        gameStarted = true;
    }

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

cards.forEach(card => card.addEventListener('click', flipCard));

const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
const livesDisplay = document.getElementById('lives');

let timeLeft = 60;
let lives = 5;
let timerInterval;

startButton.addEventListener('click', startGame);

function startGame() {
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
    alert('Spiel vorbei!');
}

function updateLivesDisplay() {
    livesDisplay.textContent = `Leben: ${lives}`;
}
