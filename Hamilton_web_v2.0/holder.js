var holder_layout = function( p ) {
  p.setup = function(){
    p.createCanvas(G_SIZE*SIZE+1, G_SIZE*SIZE);
    for (var j = 0; j < G_SIZE; ++j){
      holder_grid[j] = new Array(G_SIZE);
      for (var i = 0; i < G_SIZE; ++i){
        holder_grid[j][i] = new Box(i*SIZE, j*SIZE, p);
        holder_grid[j][i].COLOR = -1;
        holder_grid[j][i].show();
      }
    }
  };

  p.draw = function() {
    draw_hold();
  };
};

var hold = function( pesa ) {
  if (holded != null) {
    this.clean();
    aux = holded;
    holded = pesa;
    holded.origin = new createVector(n_b, 1);
    return aux;
  }else {
    holded = pesa;
    var n_b = holded.name == 5 ? 1 : 0;
    holded.origin = new createVector(n_b, 1);
    return new Piece();
  }
}

var clean = function() {
  for (var i = 0; i < G_SIZE; ++i) {
    var pos = new createVector(0, 0);
    pos.x = holded.shapes[holded.name][0][i].x
    pos.y = holded.shapes[holded.name][0][i].y

    holder_grid[pos.y][pos.x].COLOR = -1;
    holder_grid[pos.y][pos.x].show();
  }
}

var draw_hold = function() {
  if (holded != null) {
    for (var i = 0; i < 4; ++i) {
      var pos = new createVector(-3, -1);
      pos.x = holded.shapes[holded.name][0][i].x;
      pos.y = holded.shapes[holded.name][0][i].y;

      holder_grid[pos.y][pos.x].COLOR = holded.name;
      holder_grid[pos.y][pos.x].show();
    }
  }
}
