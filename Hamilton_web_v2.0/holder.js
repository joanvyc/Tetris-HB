var holder_layout = function( p ) {
  this.holded;

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


  };

  this.hold = function( pesa ) {
    if (this.holded = null) {
      clean();
      aux = this.holded;
      this.holded = pesa;
      this.holded.origin = new createVector(0, 0);
      draw();
      return aux;
    }else {
      this.holded = pesa;
      this.holded.origin = new createVector(0, 0);
      return new Piece();
    }
  }

  var clean = function() {
    for (var i = 0; i < G_SIZE; ++i) {
      var pos = new createVector(0, 0);
      pos.x = this.shape[holded.name][0][i].x
      pos.y = this.shape[holded.name][0][i].y

      holder_grid[pos.y][pos.x].COLOR = -1;
      holder_grid[pos.y][pos.x].show();
    }
  }

  var draw = function() {
    for (var i = 0; i < 4; ++i) {
      var pos = new createVector(0, 0);
      pos.x = this.shape[holded.name][0][i].x
      pos.y = this.shape[holded.name][0][i].y

      holder_grid[pos.y][pos.x].COLOR = holded.name;
      holder_grid[pos.y][pos.x].show();
    }
  }

};

var holder = new p5(holder_layout, 'holded-matrix');
