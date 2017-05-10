// Layout vars
var FILES = 20;
var COLS = 10;
var SIZE = 30;
var G_SIZE = 4;
var DIST = 0;

var grid = Array(20);
var holder_grid = Array(3);
var pesa;
var holded;

// Game vars
var frameLastFall = 0;
var frameLastMove = 0;

var fallDelay = 20;
var moveDelay = 5;

var dirH = "stoped"; // direccio Horitzontal.
var dirR = "stoped";  // direccio Rotacio.
var inverse_rotation = false;

var is_holded;

var score = 0;

// Classes auxiliars
class createVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};


var game = new p5(game_layout, 'tetris_matrix');
var holder = new p5(holder_layout, 'holded-matrix');
