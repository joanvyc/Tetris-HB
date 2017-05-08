var frameLastFall = 0;
var frameLastMove = 0;

var dealyFall;
var delayMove;

var dirH = "stoped"; // direccio Horitzontal.
var dirR = "right";  // direccio Rotacio.
var rotar = false;

var update = function() {

	// En funcio de l'input actua.
	if (frameLastFall + fallDelay < frameCount) {
    fall("dynamic");
    frameLastFall = frameCount;
  }
  if (frameLastMove + moveDelay < frameCount) {
		var dir = dirH == "left" ? -1 : (dirH == "right" ?  1 : 0);
    pesa.x_move(dir);
    frameLastMove = frameCount;
  }
	if (rotar && pesa.pot_rotar()) {
		pesa.rotar();
		rotar = false;
	}

	// nou frame.
	var mida = COLS * FILES;
	for (var i = 0; i < mida; ++i) grid[i].show();
}

var fall = function(type){
	if (type == "dynamics"){
		var next_pesa = pesa;
		next_pesa.origin.y = pesa.origin.y + 1;
		var can_fall = true;
		for (var i = 0; i < 4 && can_fall; ++i) {
			if (next_pesa.pos_box(i).y >= COLS || next_pesa.box(i).state == "static") can_fall = false;
		}
		if (can_fall) pesa = next_pesa;
		else {
			pesa.make_static();
			pesa.createShape();
		}
	}
	else if (type == "statics") {


	}
}

var checkLines = function() {
	var state_of_line = function(i) {
		this.empty = true;
		this.full = true;

		for (var j = 0; j < COLS && (this.empty || this.full); ++j) {
			if (grid[i][j].state == "default") {
				this.full = false;
			}
			else{
				this.empty = false;
			}
		}
	}

	var delete_line = function(i) {
		for (var j = 0; j < COLS; ++j) {
			grid[i][j].COLOR = -1;
			grid[i][j].state = "default";
		}
	}

	var i = FILES-1;
	do{
		var state = state_of_line(i);
		if (state.full) {
			delete_line(i);
			fall("statics");
		}
		else --i;
	} while(i >= 0 && !state.empty);
}

function keyPressed() {
	switch(keyCode){
		case LEFT_ARROW: 	direccio = "left";  break;
		case RIGHT_ARROW:	direccio = "rigth";	break;
		case UP_ARROW: 		rotar = true;				break;
		case DOWN_ARROW: 	fallDelay = 5;			break;
	}
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) fallDelay = 45;
  else if ((keyCode == LEFT_ARROW) || (keyCode == RIGHT_ARROW)) direccio = "stoped";
}
