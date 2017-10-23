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

function keyPressed() {
  switch(game.keyCode){
    case game.LEFT_ARROW: 	dirH = "left";                  break;
    case game.RIGHT_ARROW:	dirH = "right";	                break;
    case game.UP_ARROW:		dirR = "right";                 break;
    case 16: 			dirR = "left";			break;
    case game.DOWN_ARROW: 	fallDelay = 5;			break;
    case 67: {
      if (!is_holded){
        pesa.make_static();
        pesa.clean();
        pesa = hold(pesa);
        pesa.origin.x = 3;
        pesa.origin.y = -2;
        pesa.draw();
        is_holded = true;
      }
      break;
    }
    case 32: fallDelay = 0;                                             break;
    default:                                                            break;
  }
}

function keyReleased() {
  switch(game.keyCode){
    case game.DOWN_ARROW:  fallDelay = defFallDelay - 3*level;   break;
    case game.LEFT_ARROW:  dirH = "stoped";  break;
    case game.RIGHT_ARROW: dirH = "stoped";  break;
    default:                                 break;
  }
};
