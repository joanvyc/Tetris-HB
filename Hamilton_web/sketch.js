var frameCounter = 0;
var files = 20;
var cols = 10;
var size = 5;

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
    for(var i = 0; i<200; ++i){
        grid[i].show();
    }

    frameCounter++;
}

var pos = function(x, y){
    return x + y * files;
}
