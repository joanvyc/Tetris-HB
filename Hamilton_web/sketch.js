var frameCounter = 0;
var FILES = 20;
var COLS = 10;
var SIZE = 30;

//var pesa;

var grid = Array(200);

function setup() {
    var canvas;
    canvas = createCanvas(COLS*SIZE+1, FILES*SIZE);
    canvas.parent('container');
    background(255, 255, 255);

    //pesa = new piece();

    for(var i = 0; i<FILES; ++i){
        for(var j = 0; j<COLS; ++j){
            var quad = new quadraditu(j*SIZE, i*SIZE);
            grid[pos(i, j)] = quad;
            quad.show();
        }
    }

}

function draw() {
    //background(0);
    /**
    for(var i = 0; i<200; ++i){
        grid[i].show();
    }
    */
    update();
    frameCounter++;
}

var update = function(){
    if (frameCounter % 90 == 0) {
      //pesa.update();
      checkLines();
    }

}

var checkLines = function(){
  var i = FILES-1;
  while(i >= 0 && !line_i_is_empty(i)){
    for (var j = FILES; j > 0; --j){
      
    }
    --i;
  }

}

var line_i_is_empty = function(x){
  var empty = true;
  var limit = COLS*(i+1);
  for (var i = COLS*x; empty && i < limit; ++i){
    if (!grid[i].is_default()) empty = false;
  }
}

var pos = function(x, y){
    return x + y * FILES;
}
