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
// snake growth🐍
var snakeBody = [];

// food🍕
var foodX;
var foodY;

window.onload = function () {
    board = document.getElementById("board");
    board.width = columns * blockSize;
    board.height = rows * blockSize;
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
    // to draw food🍕
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    //to draw snake🐍
    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);// snake growth🐍
        placeFood();// for next food at random position🍕
    }
    //to grow snake🐍🐍🐍
    for (let i = snakeBody.length -1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    // snake's second body🐍 = snake's head🐍
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
       context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    
}

// to draw food at random position
function placeFood() {
    foodX = Math.floor(Math.random()* columns) * blockSize;
    foodY = Math.floor(Math.random()* rows) * blockSize;
}

// changeDirection⬅️➡️⬆️⬇️
function changeDirection(event) {
    if (event.key === "w" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (event.key === "s" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (event.key === "a" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (event.key === "d" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}










