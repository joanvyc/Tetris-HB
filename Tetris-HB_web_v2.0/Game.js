var update = function( p ) {
	var lastLevel = level;
	level = 1 + Math.floor(score/5000);
	if (lastLevel > level) fallDelay = defFallDelay - 3*level;


	document.getElementById("Score").innerHTML = score;
	document.getElementById("Level").innerHTML = level;
	document.getElementById("Lines").innerHTML = lines;

	// En funcio de l'input actua.
	if (frameLastFall + fallDelay < p.frameCount) {
    fall("dynamics");
    frameLastFall = p.frameCount;
  }
  if (frameLastMove + moveDelay < p.frameCount) {
	var dir = dirH == "left" ? -1 : (dirH == "right" ?  1 : 0);
    pesa.x_move(dir);
    frameLastMove = p.frameCount;
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
			if (pesa.pos_box(i).y >= -1){
				if (
					pesa.pos_box(i).y +1 >= FILES ||
					grid[pesa.pos_box(i).y+1][pesa.pos_box(i).x].state == "static"
				 ) can_fall = false;
			}
		}
		if (can_fall) {
			pesa.clean();
			pesa.origin.y++;
			pesa.draw();
			if (fallDelay == 5 || fallDelay == 0) score += 1;
		}else{
			pesa.make_static();
			pesa.createShape();
			checkLines();
			is_holded = false;
			fallDelay = defFallDelay - 3*level;
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
			lines++;
			score += 500;
			delete_line(i);
			fall(i);
		}
		else --i;
	} while(i >= 0 && !state.empty);
}
