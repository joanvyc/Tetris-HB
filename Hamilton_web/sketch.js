var frameCounter = 0;

function setup() {
    var canvas;
    canvas = createCanvas(500, 750);
    canvas.parent('container');
    background(255, 0, 200);
}

function draw() {

  frameCounter++;
}
