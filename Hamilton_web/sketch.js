var frameCounter = 0;
var files = 20;
var cols = 10;
var size = 5;

var pesa = new piece();

var grid[];

function setup() {
    var canvas;

    canvas = createCanvas(cols*size, files*size);
    canvas.parent('container');
    background(255, 255, 255);
    for(var i = 0; i<files; ++i){
        for(var j = 0; j<cols; ++j){
            quadraditu quad(i*size, j*size);
            grid.push(quad);
        }

    }

}

function draw() {
    background(255);
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
      pesa.update();
      checkLines();
    }

}

var checkLines = function(){
  var i = 0;
  while(!line_i_is_empty()){
    for (){
      
    }
  }

}

var pos = function(x, y){
    return x + y * files;
}
