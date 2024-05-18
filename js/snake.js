// board
var blockSize = 25;
var rows = 20;
var columns = 20;
var board;
var context;

// snake🐍
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
// snake velocity🐍
var velocityX = 0;
var velocityY = 0;

// food🍕
var foodX = blockSize * 10;
var foodY = blockSize * 10;

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = columns * blockSize;
    context = board.getContext("2d"); // used to draw on the board
    placeFood();
    // to move snake🐍
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10);
}

function update () {
    context.fillStyle = "black"; // this will set the pen color to black
    context.fillRect(0, 0, board.width, board.height);
    //to draw snake🐍
    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    // to draw food🍕
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

// to draw food at random position
function placeFood() {
    foodX = Math.floor(Math.random()* columns) * blockSize;
    foodY = Math.floor(Math.random()* rows) * blockSize;
}
// changeDirection⬅️➡️⬆️⬇️
function changeDirection(event) {
    if (event.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if (event.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if (event.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    else if (event.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}









