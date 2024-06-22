const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');

const candyColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function createCandy() {
    const candy = document.createElement('div');
    const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
    candy.classList.add(randomColor, 'candy');
    candy.style.gridColumnStart = String.fromCharCode(65 + Math.floor(Math.random() * 5));
    candy.style.gridRowStart = String.fromCharCode(65 + Math.floor(Math.random() * 5));
    gameBoard.appendChild(candy);
}

function createBoard() {
    for (let i = 0; i < 25; i++) {
        createCandy();
    }
}

startButton.addEventListener('click', () => {
    gameBoard.innerHTML = '';
    createBoard();
});

createBoard();