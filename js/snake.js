// snake
var blockSize = 25;
var rows = 20;
var columns = 10;
var board;
var context;

window.onload = function () {
    board = document.getElementById("board");
    board.width = rows * blockSize;
    board.height = rows * blockSize;
    context = board.getContext("2d"); // used to draw on the board
    update();
}

function update () {
    context.fillStyle = "black"; // this will set the pen color to black
    context.fillRect(0, 0, board.width, board.height);
}












