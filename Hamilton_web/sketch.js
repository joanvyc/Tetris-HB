var frameCounter = 0;
var files = 20;
var cols = 10;
var size = 10;

var grid[];

function setup() {
    var canvas;

    canvas = createCanvas(cols*size, files*size);
    canvas.parent('container');
    background(255, 255, 255);
    for(var i = 0; i<200; ++i){
        var quadraditu;
        grid.push(quadraditu);

    }

}

function draw() {
    background(255);
    for(var i = 0; i<200; ++i){
        grid[i].show();
    }

  frameCounter++;
}
