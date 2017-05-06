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

    for(var i = 0; i<FILES; ++i){
        for(var j = 0; j<COLS; ++j){
            var position = pos(j, i);
            grid[position] = quadraditu(j*SIZE, i*SIZE);
            grid[position].show();
        }
    }

}

function draw() {
    addFrame();
    console.log(frameCount);
    update();
    frameCounter++;
}

var update = function(){
    if (frameCounter < frameCount) {
        frameCounter = frameCount + delay;
      pesa.update();

    }
}

var addFrame = function() {
  for(var x = 0; x < FILES; ++x){
    for (var y = 0; y < COLS; ++y){
      grid[pos(x,y)].show();
    }
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
    grid[i+FILES].setcolor(grid[i].color);
    grid[i].color = "default";
  }
}

var pos = function(x, y){
    return x + y * FILES;
}

function keyPressed(){
    if(keyCode == LEFT_ARROW)  pesa.moure(-1);
    if(keyCode == RIGHT_ARROW) pesa.moure(1)
    if(keyCode == UP_ARROW) pesa.rotar();
    if(keyCode == DOWN_ARROW) delay = 30;
    else delay = 90;
}
