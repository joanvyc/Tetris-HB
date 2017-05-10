// Layout vars
var FILES = 20;
var COLS = 10;
var SIZE = 30;
var G_SIZE = 4;
var DIST = 0;

var grid = Array(20);
var holder_grid = Array(3);
var pesa;

// Game vars
var frameLastFall = 0;
var frameLastMove = 0;

var fallDelay = 30;
var moveDelay = 5;

var dirH = "stoped"; // direccio Horitzontal.
var dirR = "stoped";  // direccio Rotacio.
var inverse_rotation = false;

// Classes auxiliars
class createVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};
