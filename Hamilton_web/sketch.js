var frameCounter = 0;
var files = 20;
var cols = 10;
var size = 5;


var grid[200];

function setup() {
    console.log("hola \n hola");
    var canvas;

    canvas = createCanvas(cols*size, files*size);
    canvas.parent('container');
    background(255, 255, 255);
    for(var i = 0; i<files; ++i){
        for(var j = 0; j<cols; ++j){
            quadraditu quad(i*size, j*size);
            grid[pos(i, j)] = quad;
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
  var i = files-1;
  while(i >= 0 && !line_i_is_empty(i)){
    for (var j = files; j > 0; --j){

    }
    --i;
  }

}

var pos = function(x, y){
    return x + y * files;
}
