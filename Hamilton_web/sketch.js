<<<<<<< HEAD
var frameCounter = 0;
=======
var files = 20;
var cols = 10;
var grid[];
var size = 10;
>>>>>>> cf4ab584bd7ea608b9f450aa09900fc75c4a9877

function setup() {
    var canvas;
    canvas = createCanvas(cols*size, files*size);
    canvas.parent('container');
    background(255, 255, 255);
}

function draw() {

  frameCounter++;
}
