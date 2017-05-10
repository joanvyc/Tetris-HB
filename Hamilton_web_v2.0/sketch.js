var game_layout = function( p ) {
  p.setup = function() {
      p.createCanvas(COLS*SIZE+1, FILES*SIZE);

      for (var j = 0; j < FILES; ++j){
        grid[j] = new Array(10);
        for (var i = 0; i < COLS; ++i){
          grid[j][i] = new Box(i*SIZE, j*SIZE, p);
          grid[j][i].COLOR = -1;
          grid[j][i].show();
        }
      }

      pesa = new Piece();

  };

  p.draw = function() {
      update(p);
  };

};
var game = new p5(game_layout, 'tetris_matrix');

var keyPressed = function() {
  switch(keyCode){
    case LEFT_ARROW: 	dirH = "left";                              break;
    case RIGHT_ARROW:	dirH = "right";	                            break;
    case UP_ARROW: 		dirR = inverse_rotation ? "left" : "right";	break;
    case DOWN_ARROW: 	fallDelay = 5;			                        break;
    case 67: {
      pesa.make_static();
      pesa.clean();
      pesa = hold(pesa);
      pesa.origin.x = 0;
      pesa.origin.y = -1;
      pesa.draw();
      break;
    }
    case 32: fallDelay = 0;                                         break;
  }
}

var keyReleased = function() {
  switch(keyCode){
    case DOWN_ARROW:  fallDelay = 30;   break;
    case LEFT_ARROW:  dirH = "stoped";  break;
    case RIGHT_ARROW: dirH = "stoped";  break;
  }
};
