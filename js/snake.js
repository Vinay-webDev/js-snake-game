// board
var blockSize = 25;
var rows = 20;
var columns = 20;
var board;
var context;

// snake🐍
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// food🍕
var foodX = blockSize * 10;
var foodY = blockSize * 10;

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = columns * blockSize;
    context = board.getContext("2d"); // used to draw on the board
    placeFood();
    update();
}
// to draw food at random position
function placeFood() {
    foodX = Math.floor(Math.random()* columns) * blockSize;
    foodY = Math.floor(Math.random()* rows) * blockSize;
}

function update () {
    context.fillStyle = "black"; // this will set the pen color to black
    context.fillRect(0, 0, board.width, board.height);
    //to draw snake🐍
    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    // to draw food🍕
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}












