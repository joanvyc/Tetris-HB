var frameCounter = 0;
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
            var quad = new quadraditu(j*SIZE, i*SIZE);
            grid[pos(i, j)] = quad;
            quad.show();
        }
    }

}

function draw() {
    update();
    frameCounter++;
}

var update = function(){
    if (frameCounter % 90 == 0) {
      pesa.update();
    }
    pesa.entrada();
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
