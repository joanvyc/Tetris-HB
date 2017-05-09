var frameLastFall = 0;
var frameLastMove = 0;

var fallDelay = 30;
var moveDelay = 5;

var dirH = "stoped"; // direccio Horitzontal.
var dirR = "stoped";  // direccio Rotacio.
var inverse_rotation = false;

var update = function() {

	// En funcio de l'input actua.
	if (frameLastFall + fallDelay < frameCount) {
    fall("dynamics");
    frameLastFall = frameCount;
  }
  if (frameLastMove + moveDelay < frameCount) {
	var dir = dirH == "left" ? -1 : (dirH == "right" ?  1 : 0);
    pesa.x_move(dir);
    frameLastMove = frameCount;
  }
	var dir = dirR == "left" ? -1 : (dirR == "right" ?  1 : 0);

	pesa.rotar(dir);
	dirR = "stoped";

	// nou frame.
	for (var i = 0; i < FILES; ++i){
		for (var j = 0; j < COLS; ++j) {
			grid[i][j].show();
		}
	}
}

var fall = function(type){
	if (type == "dynamics"){
		var can_fall = true;
		for (var i = 0; i < 4 && can_fall; ++i) {
			if (pesa.pos_box(i).y +1 >= FILES || grid[pesa.pos_box(i).y+1][pesa.pos_box(i).x].state == "static") can_fall = false;
		}
		if (can_fall) {
			pesa.clean();
			pesa.origin.y++;
			pesa.draw();
		}else{
			pesa.make_static();
			pesa.createShape();
			checkLines();
			fallDelay = 30;
		}

	}
	else{
		for(var i = type; i>0; --i){
			for(var j = 0; j<COLS; ++j){
				grid[i][j].COLOR = grid[i-1][j].COLOR;
				grid[i][j].state = grid[i-1][j].state;

			}
			delete_line(i-1);
		}

	}
}

var state_of_line =  function(i) {
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

var checkLines = function() {
	var i = FILES-1;
	do{
		var state = new state_of_line(i);
		if (state.full) {
			delete_line(i);
			fall(i);
		}
		else --i;
	} while(i >= 0 && !state.empty);
}

function keyPressed() {
	switch(keyCode){
		case LEFT_ARROW: 	dirH = "left";  break;
		case RIGHT_ARROW:	dirH = "right";	break;
		case UP_ARROW: 		dirR = inverse_rotation ? "left" : "right";	break;
		case DOWN_ARROW: 	fallDelay = 5;			break;
		case 32: fallDelay = 0; break;
	}
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) fallDelay = 30;
  else if ((keyCode == LEFT_ARROW) || (keyCode == RIGHT_ARROW)) dirH = "stoped";
}
