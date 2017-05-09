var frameCounter = 0;
var delay = 30;
var FILES = 20;
var COLS = 10;
var SIZE = 30;

//var pesa;

var grid = Array(20);
var pesa;

function setup() {
    frameRate(60);

    var canvas = createCanvas(COLS*SIZE+1, FILES*SIZE);
    canvas.parent('container');

    for (var j = 0; j < FILES; ++j){
      grid[j] = new Array(10);
      for (var i = 0; i < COLS; ++i){
        grid[j][i] = new Box(i*SIZE, j*SIZE);
        grid[j][i].COLOR = 1;
        grid[j][i].show();
      }
    }

    pesa = new Piece();
    for (var i = 0; i < 61; ++i)update();
}

function draw() {

}
