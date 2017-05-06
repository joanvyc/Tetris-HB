var frameCounter = 0;
var delay = 90;
var FILES = 20;
var COLS = 10;
var SIZE = 30;

//var pesa;

var grid = Array(200);
var pesa;

function setup() {
    frameRate(60);

    var canvas;
    canvas = createCanvas(COLS*SIZE+1, FILES*SIZE);
    canvas.parent('container');
    background(255, 255, 255);

    pesa = new piece();

    for (var j = 0; j < FILES; ++j){
      for (var i = 0; i < COLS; ++i){
        var position = pos(i, j);
        grid[position] = new quadraditu(i*SIZE, j*SIZE);
        grid[position].show();
      }
    }
/**
    for(var i = 0; i<FILES; ++i){
        for(var j = 0; j<COLS; ++j){
            var position = pos(i, j);
            grid[position] = new quadraditu(j*SIZE, i*SIZE);
            grid[position].show();
        }
    }
*/
}

function draw() {
    update();
    addFrame();
    frameCounter++;
}

var update = function(){
    if (frameCounter < frameCount) {
        frameCounter = frameCount + delay;
      pesa.update();

    }
}

var addFrame = function() {
  for(var x = 0; x < 200; ++x){
    grid[x].show();
  }
}

var checkLines = function(){
  var i = FILES-2;
  var checked = line_state(FILES-1);
  while(i >= 0 && !checked.x){
    if (checked.y) delete_line(i);
  }
}

var line_state = function(x){
  var empty = createVector(true, true);
  var limit = COLS*(i+1);
  for (var i = COLS*x;i < limit; ++i){
    if (!grid[i].is_default()) empty.x = false;
    if (grid[i].is_default())  empty.y = false;
  }
}

var delete_line = function(line){
  for (var i = line*FILES -1; i >= 0; --i) {
    grid[i+FILES].COLOR = grid[i].COLOR;
    grid[i].COLOR = "default";
  }
}

var pos = function(x, y){
    return x + y * COLS;
}

function keyPressed(){
    if(keyCode == LEFT_ARROW)  pesa.moure(-1);
    if(keyCode == RIGHT_ARROW) pesa.moure(1)
    if(keyCode == UP_ARROW) pesa.rotar();
    if(keyCode == DOWN_ARROW) delay = 30;
    else delay = 90;
}
