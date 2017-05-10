function Piece(){
  this.shapes = Array(7);

  // Cube
  this.shapes[0] = Array(1);
  this.shapes[0][0] = [new createVector(1,1),new createVector(2,1),new createVector(1,2),new createVector(2,2)];

  // Z
  this.shapes[1] = Array(2);
  this.shapes[1][0] = [new createVector(0,1),new createVector(1,1),new createVector(1,2),new createVector(2,2)];
  this.shapes[1][1] = [new createVector(2,0),new createVector(1,1),new createVector(2,1),new createVector(1,2)];

  // S
  this.shapes[2] = Array(2);
  this.shapes[2][0] = [new createVector(1,1),new createVector(2,1),new createVector(0,2),new createVector(1,2)];
  this.shapes[2][1] = [new createVector(1,0),new createVector(1,1),new createVector(2,1),new createVector(2,2)];

  // L
  this.shapes[3] = Array(4);
  this.shapes[3][0] = [new createVector(0,1),new createVector(1,1),new createVector(2,1),new createVector(2,0)];
  this.shapes[3][1] = [new createVector(1,0),new createVector(1,1),new createVector(1,2),new createVector(2,2)];
  this.shapes[3][2] = [new createVector(0,1),new createVector(1,1),new createVector(2,1),new createVector(0,2)];
  this.shapes[3][3] = [new createVector(0,0),new createVector(1,0),new createVector(1,1),new createVector(1,2)];

  // *L
  this.shapes[4] = Array(4);
  this.shapes[4][0] = [new createVector(0,0),new createVector(0,1),new createVector(1,1),new createVector(2,1)];
  this.shapes[4][1] = [new createVector(1,0),new createVector(2,0),new createVector(1,1),new createVector(1,2)];
  this.shapes[4][2] = [new createVector(0,1),new createVector(1,1),new createVector(2,1),new createVector(2,2)];
  this.shapes[4][3] = [new createVector(0,2),new createVector(1,2),new createVector(1,1),new createVector(1,0)];

  // |
  this.shapes[5] = Array(2);
  this.shapes[5][0] = [new createVector(0,2),new createVector(1,2),new createVector(2,2),new createVector(3,2)];
  this.shapes[5][1] = [new createVector(2,0),new createVector(2,1),new createVector(2,2),new createVector(2,3)];

  // T ^-1
  this.shapes[6] = Array(4);
  this.shapes[6][0] = [new createVector(0,1),new createVector(1,1),new createVector(1,0),new createVector(2,1)];
  this.shapes[6][1] = [new createVector(1,0),new createVector(1,1),new createVector(2,1),new createVector(1,2)];
  this.shapes[6][2] = [new createVector(2,1),new createVector(1,1),new createVector(1,2),new createVector(0,1)];
  this.shapes[6][3] = [new createVector(1,2),new createVector(1,1),new createVector(0,1),new createVector(1,0)];

  this.createShape = function() {
    this.rotations = 0;
    this.name = Math.floor(Math.random()*7);
    this.origin = new createVector(3, -2);
  }

  this.x_move = function(dir)  {
    if (dir != 0)
    {
      var colision = false;
      var rotated = this.rotations % this.shapes[this.name].length;
      for (var i = 0; i < 4 && !colision; ++i) {
        var next_pos = new createVector(0, 0);
        next_pos.x = this.shapes[this.name][rotated][i].x + this.origin.x + dir;
        next_pos.y = this.shapes[this.name][rotated][i].y + this.origin.y;

        if (
            next_pos.x >= COLS                       ||
            next_pos.x <  0                          ||
            ((next_pos.y >= 0 && next_pos.y < FILES) &&
            grid[next_pos.y][next_pos.x].state == "static")
        )
        {
          colision = true;
        }

      }
      if (!colision)
      {
        this.clean();
        this.origin.x += dir;
        this.draw();
      }
    }
  }

  this.rotar = function(dir) {
    if(dir != 0 && this.can_rotate(dir)){
        this.clean();
        this.rotations += dir;
        if (this.rotations < 0) this.rotations += this.shapes[this.name].length;
        this.draw();
    }
  }

  this.can_rotate = function(dir) {
    if (dir < 0) dir += this.shapes[this.name].length;
    for (var i = 0; i < 4; ++i) {
      var next_pos = new createVector(0, 0);
      next_pos.x = this.shapes[this.name][(this.rotations + (dir)) % this.shapes[this.name].length][i].x + this.origin.x;

      next_pos.y = this.shapes[this.name][(this.rotations + (dir)) % this.shapes[this.name].length][i].y + this.origin.y;

      if (
        next_pos.x >= COLS                              ||
        next_pos.x < 0                                  ||
        (next_pos.y < FILES && next_pos.y >= 0          &&
        grid[next_pos.y][next_pos.x].state == "static")
      ) return false;
    }return true;
  }

  this.clean = function() {
    for(var i = 0; i<4; ++i){
      var clean_pos = new createVector(0,0);
      clean_pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;

      clean_pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;

      if (clean_pos.x >= 0 && clean_pos.x < COLS && clean_pos.y >= 0 && clean_pos.y < FILES){
        grid[clean_pos.y][clean_pos.x].state = "default";
        grid[clean_pos.y][clean_pos.x].COLOR = -1;
      }
    }
  }

  this.draw = function() {
    for(var i = 0; i<4; ++i){
      var next_pos = new createVector(0,0);
      next_pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;

      next_pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;

      if (next_pos.x >= 0 && next_pos.x < COLS && next_pos.y >= 0 && next_pos.y < FILES) {
        grid[next_pos.y][next_pos.x].state = "dynamic";
        grid[next_pos.y][next_pos.x].COLOR = this.name;
      }
    }
  }

  this.make_static = function(){
      for(var i = 0; i<4; ++i){
          var static_pos = new createVector(0,0);
          static_pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;

          static_pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;

          if (static_pos.x >= 0 && static_pos.x < COLS && static_pos.y >= 0 && static_pos.y < FILES)
            grid[static_pos.y][static_pos.x].state = "static";
      }
  }

  this.pos_box = function(i) {
    var pos = new createVector(0,0);
    pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;
    pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;
    return pos;
  }

  this.box = function(i) {
    var pos = new createVector(0,0);
    pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;
    pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;
    return grid[pos.y][pos.x];
  }

  this.createShape();
  this.draw();

}
